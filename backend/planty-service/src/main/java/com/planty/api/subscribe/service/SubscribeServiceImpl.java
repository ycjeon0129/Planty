package com.planty.api.subscribe.service;

import com.planty.api.subscribe.repository.SubscribeRepository;
import com.planty.api.subscribe.response.FindSubscribeResponse;
import java.util.*;

import com.planty.db.entity.ViewUserSubscribe;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@RequiredArgsConstructor
public class SubscribeServiceImpl implements SubscribeService {
    private final SubscribeRepository subscribeRepository;
    @Override
    public List<FindSubscribeResponse> getUserSubscribe(Integer userId) {
        List<FindSubscribeResponse> subscribeList = new ArrayList<>();

        List<ViewUserSubscribe> list = subscribeRepository.findByUid(userId);
        for(ViewUserSubscribe item : list) {
            FindSubscribeResponse sub = FindSubscribeResponse.builder()
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
