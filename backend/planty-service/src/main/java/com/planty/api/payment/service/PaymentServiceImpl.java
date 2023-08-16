package com.planty.api.payment.service;

import com.planty.api.subscribe.controller.SubscribeController;
import com.planty.api.subscribe.request.UserSubscribeRequest;
import com.planty.common.exception.handler.CustomException;
import com.planty.common.util.SecurityUtil;
import com.planty.db.entity.SubscribeProduct;
import com.planty.db.entity.TicketProduct;
import com.planty.db.entity.UserInfo;
import com.planty.db.repository.SubscribeProductRepository;
import com.planty.db.repository.TicketProductRepository;
import com.planty.db.repository.UserInfoRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import static com.planty.common.exception.handler.ErrorCode.*;
import static com.planty.common.util.LogCurrent.*;
import static com.planty.common.util.LogCurrent.START;

@Slf4j
@Service
@RequiredArgsConstructor
public class PaymentServiceImpl implements PaymentService {

    private final UserInfoRepository userInfoRepository;
    private final SubscribeProductRepository subscribeProductRepository;
    private final TicketProductRepository ticketProductRepository;
    private final SubscribeController subscribeController;

    @Override
    public void subscribePayment(Long spid) {
        log.info(logCurrent(getClassName(), getMethodName(), START));
        UserInfo userInfo = userInfoRepository.findByUserEmail(SecurityUtil.getCurrentUserEmail())
                .orElseThrow(() -> new CustomException(USER_NOT_FOUND));
        SubscribeProduct subscribeProduct = subscribeProductRepository.findBySpid(spid)
                .orElseThrow(() -> new CustomException(PRODUCT_NOT_FOUND));
        UserSubscribeRequest subscribeRequest = new UserSubscribeRequest();
        subscribeRequest.setSpid(spid);
        subscribeController.postUserSubscribe(subscribeRequest);
        log.info(logCurrent(getClassName(), getMethodName(), END));
    }

    @Override
    public void ticketPayment(Long tpid) {
        log.info(logCurrent(getClassName(), getMethodName(), START));
        UserInfo userInfo = userInfoRepository.findByUserEmail(SecurityUtil.getCurrentUserEmail())
                .orElseThrow(() -> new CustomException(USER_NOT_FOUND));
        TicketProduct ticketProduct = ticketProductRepository.findByTpid(tpid)
                .orElseThrow(() -> new CustomException(TICKET_PRODUCT_NOT_FOUND));
        int ticket = ticketProduct.getCount();
        userInfo.setEmergencyCount( (userInfo.getEmergencyCount()) + ticket );
        userInfoRepository.save(userInfo);
        log.info(logCurrent(getClassName(), getMethodName(), END));
    }
}
