package com.planty.api.emergency.service;

import com.planty.api.emergency.request.EmergencyConnectionRequest;
import com.planty.api.emergency.response.ConnectionCountResponse;
import com.planty.api.emergency.response.EmergencyResponse;
import com.planty.api.emergency.response.EmergencySessionResponse;
import com.planty.common.exception.handler.CustomException;
import com.planty.common.util.OpenViduUtil;
import com.planty.common.util.SecurityUtil;
import com.planty.common.util.TimeUtil;
import com.planty.db.entity.ConsultingBooking;
import com.planty.db.entity.EmergencyLog;
import com.planty.db.entity.UserInfo;
import com.planty.db.repository.*;
import io.openvidu.java.client.OpenViduHttpException;
import io.openvidu.java.client.OpenViduJavaClientException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static com.planty.common.exception.handler.ErrorCode.*;
import static com.planty.common.util.LogCurrent.*;
import static com.planty.common.util.LogCurrent.START;
import static org.springframework.data.domain.Sort.Order.desc;

@Slf4j
@Service
@RequiredArgsConstructor
public class EmergencyServiceImpl implements EmergencyService {

    private final GmInfoRepository gmInfoRepository;
    private final UserInfoRepository userInfoRepository;
    private final SubscribeProductRepository subscribeProductRepository;
    private final UserSubscribeRepository userSubscribeRepository;
    private final PlantyInfoRepository plantyInfoRepository;
    private final ViewUserConsultingRepository viewUserConsultingRepository;
    private final EmergencyLogRepository emergencyLogRepository;
    @Autowired
    private OpenViduUtil openViduUtil;

    @Override
    public List<EmergencyResponse> findEmergencyList() throws ParseException {
        String email = SecurityUtil.getCurrentUserEmail();
        UserInfo userInfo = userInfoRepository.findByUserEmail(email)
                .orElseThrow(() -> new CustomException(USER_NOT_FOUND));

        List<EmergencyResponse> emergencyList = new ArrayList<>();
        List<EmergencyLog> list = emergencyLogRepository.findByUidAndStartTimeIsNotNull(userInfo, Sort.by(desc("startTime")));

        for(EmergencyLog item : list) {
            String timeTaken = TimeUtil.findTimeDiff(item.getStartTime(), item.getEndTime());
            String date = TimeUtil.findDateOnly(item.getStartTime());
            emergencyList.add(
                    EmergencyResponse.builder()
                            .eid(item.getEid())
                            .type(item.getType())
                            .plantName(item.getName())
                            .date(date)
                            .startTime(item.getStartTime())
                            .endTime(item.getEndTime())
                            .timeTaken(timeTaken)
                            .content(item.getContent())
                            .gm(item.getGid().getNickname())
                            .user(item.getUid().getUserName())
                            .build()
            );
        }
        return emergencyList;
//        for(ViewUserConsulting item : list) {
//            consultingList.add(
//                    UserConsultingResponse.builder()
//                            .cid(item.getCid())
//                            .sid(item.getSid())
//                            .time(item.getTime())
//                            .date(item.getDate())
//                            .cancel(item.getCancel())
//                            .active(item.getActive())
//                            .subscribeProductName(item.getName())
//                            .recommendedStartDate(item.getRecommendedStartDate())
//                            .recommendedEndDate(item.getRecommendedEndDate())
//                            .advice(item.getContent())
//                            .startTime(item.getStartTime())
//                            .endTime(item.getEndTime())
//                            .build()
//            );
//        }

    }

    @Override
    public ConnectionCountResponse getGmCnt() {
        log.info(logCurrent(getClassName(), getMethodName(), START));
        log.info(logCurrent(getClassName(), getMethodName(), END));
        return ConnectionCountResponse.builder()
                .gmCnt(gmInfoRepository.countByActivateTrue()).build();
    }

    @Override
    @Transactional
    public EmergencySessionResponse initializeSession(int type) throws OpenViduJavaClientException, OpenViduHttpException, IllegalAccessException {
        Map<String, Object> params = new HashMap<>();
        UserInfo userInfo = userInfoRepository.findByUserEmail(SecurityUtil.getCurrentUserEmail())
                .orElseThrow(() -> new CustomException(USER_NOT_FOUND));
        if (type == 1 && userInfo.getEmergencyCount() < 1) {    // 사용자가 보유한 응급실 이용권이 없다면 화상 응급실 사용 불가
            log.info("user has not enough emergency ticket : {}", userInfo.getEmergencyCount());
            throw new CustomException(EMERGENCY_TICKET_NOT_ENOUGH);
        }
        EmergencyLog emergencyInfo = EmergencyLog.builder()
                .uid(userInfo)
                .type(type)
                .build();
        Long eid = emergencyLogRepository.save(emergencyInfo).getEid();
        params.put("eid", eid);
        String sessionId = openViduUtil.initializeSession(params);

        emergencyInfo.setConnection(sessionId);
        String requestTime = TimeUtil.findCurrentTimestamp();
        emergencyInfo.setRequestTime(requestTime);
        emergencyLogRepository.save(emergencyInfo);
        EmergencySessionResponse sessionInfo = EmergencySessionResponse.builder()
                .eid(eid)
                .sessionId(sessionId)
                .build();
        return sessionInfo;
    }

    @Override
    public String createConnection(EmergencyConnectionRequest connectionInfo) throws OpenViduJavaClientException, OpenViduHttpException, IllegalAccessException {
        log.info(logCurrent(getClassName(), getMethodName(), START));
        EmergencyLog emergencyInfo = emergencyLogRepository.findByEid(connectionInfo.getEid())
                .orElseThrow(() -> new CustomException(EMERGENCY_NOT_FOUND));
        if (!emergencyInfo.getUid().getUserEmail().equals(SecurityUtil.getCurrentUserEmail())) {
            throw new CustomException(EMERGENCY_UNAUTHORIZED);
        }
        Map<String, Object> params = new HashMap<>();
        params.put("eid", connectionInfo.getEid());
        params.put("sessionId", connectionInfo.getSessionId());
        String token = openViduUtil.createConnection(params);
        if (token == null) {
            throw new CustomException(EMERGENCY_SESSION_NOT_FOUND);
        }

        log.info(logCurrent(getClassName(), getMethodName(), END));
        return token;
    }
}
