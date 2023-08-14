package com.planty.api.gm.account.service;

import com.planty.api.gm.account.response.GmAccountResponse;
import com.planty.api.subscribe.request.UserSubscribeRequest;
import com.planty.api.subscribe.service.SubscribeService;
import com.planty.api.ticketProduct.response.TicketProductResponse;
import com.planty.common.exception.handler.ExceptionHandler;
import com.planty.common.util.SecurityUtil;
import com.planty.db.entity.*;
import com.planty.db.repository.GmInfoRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

import static com.planty.common.util.LogCurrent.*;
import static com.planty.common.util.LogCurrent.END;

@Slf4j
@Service
@RequiredArgsConstructor
public class GmAccountServiceImpl implements GmAccountService {
    private final GmInfoRepository gmInfoRepository;
    @Override // 이용권 묶음상품 상품 조회
    public GmAccountResponse getGmActive() {
        log.info(logCurrent(getClassName(), getMethodName(), START));
        Long gid = SecurityUtil.getCurrentGid();
        GmInfo gm = gmInfoRepository.findByGid(gid)
                .orElseThrow(() -> new NullPointerException(ExceptionHandler.GM_NOT_FOUND));
        GmAccountResponse gmAccountResponse = GmAccountResponse.builder()
                .active(gm.getActivate())
                .build();
        log.info(logCurrent(getClassName(), getMethodName(), END));
        return gmAccountResponse;
    }

    @Override
    public GmAccountResponse updateGmActive() {
        log.info(logCurrent(getClassName(), getMethodName(), START));

        Long gid = SecurityUtil.getCurrentGid();
        GmInfo gm = gmInfoRepository.findByGid(gid)
                .orElseThrow(() -> new NullPointerException(ExceptionHandler.GM_NOT_FOUND));

        gm.setActivate(!gm.getActivate());
        gmInfoRepository.save(gm);

        GmAccountResponse gmAccountResponse = GmAccountResponse.builder()
                .active(gm.getActivate())
                .build();

        log.info(logCurrent(getClassName(), getMethodName(), END));
        return gmAccountResponse;
    }
}
