package com.planty.api.subscribe.service;

import com.planty.db.repository.SubscribeRepository;
import com.planty.api.subscribe.response.UserSubscribeResponse;
import java.util.*;

import com.planty.db.entity.ViewUserSubscribe;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class SubscribeServiceImpl implements SubscribeService {
    private final SubscribeRepository subscribeRepository;
    @Override
    public List<UserSubscribeResponse> getUserSubscribe(Integer userId) {
        List<UserSubscribeResponse> subscribeList = new ArrayList<>();

        List<ViewUserSubscribe> list = subscribeRepository.findByUid(userId);
        for(ViewUserSubscribe item : list) {
            UserSubscribeResponse sub = UserSubscribeResponse.builder()
                    .sid(item.getSid())
                    .arduinoId(item.getArduinoId())
                    .consultingRemainCnt(item.getConsultingRemainCnt())
                    .startDate(item.getStartDate())
                    .endDate(item.getEndDate())
                    .spName(item.getSpName())
                    .period(item.getPeriod())
                    .consultingCnt(item.getConsultingCnt())
                    .description(item.getDescription())
                    .piName(item.getPiName())
                    .tonicPeriod(item.getTonicPeriod())
                    .GMNickname(item.getGMNickname())
                    .build();
            subscribeList.add(sub);
        }

        // todo : FindSubscribeResponse -> cbDate 추가
        return subscribeList;
    }
}
