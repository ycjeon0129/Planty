package com.planty.api.gm.subscribe.service;

import com.planty.api.gm.subscribe.response.GmSubscribeResponse;
import com.planty.common.exception.handler.ExceptionHandler;
import com.planty.common.util.SecurityUtil;
import com.planty.db.entity.GmInfo;
import com.planty.db.entity.SubscribeProduct;
import com.planty.db.entity.UserSubscribe;
import com.planty.db.repository.GmInfoRepository;
import com.planty.db.repository.SubscribeProductRepository;
import com.planty.db.repository.UserSubscribeRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import lombok.RequiredArgsConstructor;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class GmSubscribeServiceImpl implements GmSubscribeService {

    private final GmInfoRepository gmInfoRepository;
    private final SubscribeProductRepository subscribeProductRepository;
    private final UserSubscribeRepository userSubscribeRepository;

    @Override
    public List<GmSubscribeResponse> findSubscribeList() {
        List<GmSubscribeResponse> list = new ArrayList<>();
        Long gid = SecurityUtil.getCurrentGid();
        GmInfo gmInfo = gmInfoRepository.findByGid(gid)
                .orElseThrow();
        List<SubscribeProduct> subscribeProduct = subscribeProductRepository.findByGid(gmInfo);
        for (SubscribeProduct sp : subscribeProduct) {
            list.add(GmSubscribeResponse.builder()
                    .spid(sp.getSpid())
                    .name(sp.getName())
                    .thumbnail(sp.getThuumbnail())
                    .consultingCnt(sp.getConsultingCnt())
                    .period(sp.getPeriod())
                    .build()
            );
        }
        return list;
    }

}
