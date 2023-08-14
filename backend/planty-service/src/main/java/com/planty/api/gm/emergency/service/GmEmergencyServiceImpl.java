package com.planty.api.gm.emergency.service;

import com.planty.api.consulting.response.UserConsultingResponse;
import com.planty.api.emergency.response.EmergencyResponse;
import com.planty.api.gm.consulting.service.GmConsultingService;
import com.planty.api.gm.emergency.request.GmEmergencyRecordRequest;
import com.planty.common.exception.handler.ExceptionHandler;
import com.planty.common.util.SecurityUtil;
import com.planty.common.util.TimeUtil;
import com.planty.db.entity.*;
import com.planty.db.repository.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class GmEmergencyServiceImpl implements GmEmergencyService {

    private final GmInfoRepository gmInfoRepository;
    private final SubscribeProductRepository subscribeProductRepository;
    private final UserSubscribeRepository userSubscribeRepository;
    private final PlantyInfoRepository plantyInfoRepository;
    private final ViewUserConsultingRepository viewUserConsultingRepository;
    private final EmergencyLogRepository emergencyLogRepository;

    @Override
    public List<EmergencyResponse> findEmergencyList() throws ParseException {
        Long gid = SecurityUtil.getCurrentGid();
        GmInfo gm = gmInfoRepository.findByGid(gid)
                .orElseThrow(() -> new NullPointerException(ExceptionHandler.GM_NOT_FOUND));

        List<EmergencyResponse> emergencyList = new ArrayList<>();
        List<EmergencyLog> list = emergencyLogRepository.findByGid(gm);

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
                            .gm(gm.getNickname())
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
    public String findSessionToken(Long eid) {
        EmergencyLog emergencyInfo = emergencyLogRepository.findByEid(eid)
                .orElseThrow(() -> new NullPointerException(ExceptionHandler.EMERGENCY_NOT_FOUND));
        Long gid = SecurityUtil.getCurrentGid();
        if (emergencyInfo.getGid() == null) {   // 해당 응급실에 대해 첫 GM 응답일 경우
            GmInfo gmInfo = gmInfoRepository.findByGid(gid)
                    .orElseThrow(() -> new NullPointerException(ExceptionHandler.GM_NOT_FOUND));
            emergencyInfo.setGid(gmInfo);
            emergencyLogRepository.save(emergencyInfo);
            return emergencyInfo.getConnection();
        } else if (emergencyInfo.getGid().getGid() == gid) {    // 해당 요청을 수락한 GM의 재요청인 경우
            return emergencyInfo.getConnection();
        } else {    // 해당 요청을 먼저 수락한 GM이 아닌 다른 GM인 경우
            return null;
        }
    }

    @Override
    public void deleteSession(GmEmergencyRecordRequest recordInfo) throws IllegalAccessException {
        EmergencyLog emergencyInfo = emergencyLogRepository.findByEid(recordInfo.getEid())
                .orElseThrow(() -> new NullPointerException(ExceptionHandler.EMERGENCY_NOT_FOUND));
        if (emergencyInfo.getGid().getGid() != SecurityUtil.getCurrentGid()) {
            throw new IllegalAccessException(ExceptionHandler.EMERGENCY_UNAUTHORIZED);
        }
        emergencyInfo.setName(recordInfo.getName());
        emergencyInfo.setContent(recordInfo.getContent());
        emergencyInfo.setEndTime(TimeUtil.findCurrentTimestamp());
        emergencyInfo.setConnection(null);

        emergencyLogRepository.save(emergencyInfo);
    }

    @Override
    public void setStartTime(Long eid) {
        EmergencyLog emergencyInfo = emergencyLogRepository.findByEid(eid)
                .orElseThrow(() -> new NullPointerException(ExceptionHandler.EMERGENCY_NOT_FOUND));
        emergencyInfo.setStartTime(TimeUtil.findCurrentTimestamp());
        emergencyLogRepository.save(emergencyInfo);
    }
}
