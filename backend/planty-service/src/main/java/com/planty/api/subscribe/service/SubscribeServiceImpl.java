package com.planty.api.subscribe.service;

import com.planty.db.repository.UserConsultingRepository;
import com.planty.db.repository.UserSubscribeRepository;
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
    private final UserSubscribeRepository subscribeRepository;
    private final UserConsultingRepository userConsultingRepository;
    @Override
    public List<UserSubscribeResponse> getUserSubscribe(Integer userId) {
        List<UserSubscribeResponse> subscribeList = new ArrayList<>();
        List<ViewUserSubscribe> list = subscribeRepository.findByUid(userId);
        for(ViewUserSubscribe item : list) {
            boolean end = item.getEndDate() != null;
            UserSubscribeResponse sub = UserSubscribeResponse.builder()
                    .sid(item.getSid())
                    .arduinoId(item.getArduinoId())
                    .startDate(item.getStartDate())
                    .end(end)
                    .subscribeProductName(item.getSpName())
                    .consultingCnt(item.getConsultingCnt())
                    .consultingRemainCnt(item.getConsultingRemainCnt())
                    .build();
            subscribeList.add(sub);
        }

        // todo : FindSubscribeResponse -> cbDate 추가
        return subscribeList;
    }
}
