package com.planty.api.gm.consulting.service;

import com.planty.api.consulting.response.UserConsultingResponse;
import com.planty.common.exception.handler.ExceptionHandler;
import com.planty.common.util.SecurityUtil;
import com.planty.db.entity.ViewUserConsulting;
import com.planty.db.repository.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class GmConsultingServiceImpl implements GmConsultingService {

    private final GmInfoRepository gmInfoRepository;
    private final SubscribeProductRepository subscribeProductRepository;
    private final UserSubscribeRepository userSubscribeRepository;
    private final PlantyInfoRepository plantyInfoRepository;
    private final ViewUserConsultingRepository viewUserConsultingRepository;

    @Override
    public List<UserConsultingResponse> findConsultingList() {
        List<UserConsultingResponse> consultingList = new ArrayList<>();
        log.info("1");
        List<ViewUserConsulting> list = viewUserConsultingRepository.findByUid(SecurityUtil.getCurrentGid());
        log.info("{}", list);
        for(ViewUserConsulting item : list) {
            consultingList.add(
                    UserConsultingResponse.builder()
                            .cid(item.getCid())
                            .sid(item.getSid())
                            .time(item.getTime())
                            .date(item.getDate())
                            .cancel(item.getCancel())
                            .active(item.getActive())
                            .subscribeProductName(item.getName())
                            .recommendedStartDate(item.getRecommendedStartDate())
                            .recommendedEndDate(item.getRecommendedEndDate())
                            .advice(item.getContent())
                            .startTime(item.getStartTime())
                            .endTime(item.getEndTime())
                            .build()
            );
        }
        return consultingList;
    }
}
