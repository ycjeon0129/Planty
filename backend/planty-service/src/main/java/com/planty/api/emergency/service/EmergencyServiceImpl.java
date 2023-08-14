package com.planty.api.emergency.service;

import com.planty.api.emergency.response.ConnectionCountResponse;
import com.planty.api.emergency.response.EmergencyResponse;
import com.planty.common.exception.handler.ExceptionHandler;
import com.planty.common.util.SecurityUtil;
import com.planty.common.util.TimeUtil;
import com.planty.db.entity.EmergencyLog;
import com.planty.db.entity.UserInfo;
import com.planty.db.repository.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;

import static com.planty.common.util.LogCurrent.*;
import static com.planty.common.util.LogCurrent.START;

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

    @Override
    public List<EmergencyResponse> findEmergencyList() throws ParseException {
        String email = SecurityUtil.getCurrentUserEmail();
        UserInfo userInfo = userInfoRepository.findByUserEmail(email)
                .orElseThrow(() -> new NullPointerException(ExceptionHandler.USER_NOT_FOUND));

        List<EmergencyResponse> emergencyList = new ArrayList<>();
        List<EmergencyLog> list = emergencyLogRepository.findByUid(userInfo);

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
}
