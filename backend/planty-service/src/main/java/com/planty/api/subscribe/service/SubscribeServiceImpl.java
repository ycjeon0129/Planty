package com.planty.api.subscribe.service;

import com.planty.api.embedded.response.UserSubscribeEmbeddedResponse;
import com.planty.api.subscribe.response.UserSubscribeDatailResponse;
import com.planty.db.entity.*;
import com.planty.db.repository.UserConsultingRepository;
import com.planty.db.repository.UserEmbeddedRepository;
import com.planty.db.repository.UserInfoRepository;
import com.planty.db.repository.UserSubscribeRepository;
import com.planty.api.subscribe.response.UserSubscribeResponse;

import java.time.LocalDateTime;
import java.util.*;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class SubscribeServiceImpl implements SubscribeService {
    private final UserSubscribeRepository userSubscribeRepository;
    private final UserConsultingRepository userConsultingRepository;
    private final UserInfoRepository userInfoRepository;
    private final UserEmbeddedRepository userEmbeddedRepository;
    @Override
    public List<UserSubscribeResponse> getUserSubscribe(String userId) {
        UserInfo user = userInfoRepository.findByUserId(userId).orElseThrow(() -> {
            throw new NullPointerException();
        });
        List<UserSubscribeResponse> subscribeList = new ArrayList<>();
        List<ViewUserSubscribe> list = userSubscribeRepository.findByUid(user.getUid().intValue());

        for(ViewUserSubscribe item : list) {
            boolean end = item.getEndDate() != null;
            UserSubscribeResponse sub = UserSubscribeResponse.builder()
                    .sid(item.getSid())
                    .startDate(item.getStartDate())
                    .end(end)
                    .title(item.getSpName())
                    .consultingCnt(item.getConsultingCnt())
                    .consultingRemainCnt(item.getConsultingRemainCnt())
                    .consultingDate(item.getCbDate())
                    .consultingCancel(item.getCbCancel())
                    .consultingActive(item.getCbActive())
                    .consultingTime(item.getCbTime())
                    .build();
            subscribeList.add(sub);
        }
        return subscribeList;
    }

    @Override
    public UserSubscribeDatailResponse getUserSubscribeDetail(String userId, Integer sid) {
        UserInfo user = userInfoRepository.findByUserId(userId).orElseThrow(() -> {
            throw new NullPointerException();
        });

        // todo : uid, sid 이중 확인 다른방법 check
        ViewUserSubscribe sub = userSubscribeRepository.findByUidAndSid(user.getUid().intValue(), sid);
        List<PlantData> plantDataList = userEmbeddedRepository.findByArduinoId(sub.getArduinoId());
        List<UserSubscribeEmbeddedResponse> embeddedList = new ArrayList<>();
        for(PlantData item : plantDataList) {
            UserSubscribeEmbeddedResponse embedded = UserSubscribeEmbeddedResponse.builder()
                    .date(item.getDate())
                    .temp(item.getTemp())
                    .humidity(item.getHumidity())
                    .soil(item.getSoil())
                    .build();
            embeddedList.add(embedded);
        }
        return UserSubscribeDatailResponse.builder()
                .sid(sub.getSid())
                .startDate(sub.getStartDate())
                .endDate(sub.getEndDate())
                .title(sub.getSpName())
                .consultingCnt(sub.getConsultingCnt())
                .consultingRemainCnt(sub.getConsultingRemainCnt())
                .consultingDate(sub.getCbDate())
                .consultingCancel(sub.getCbCancel())
                .consultingActive(sub.getCbActive())
                .consultingTime(sub.getCbTime())
                .embeddedInfo(embeddedList)
                .build();
    }
}
