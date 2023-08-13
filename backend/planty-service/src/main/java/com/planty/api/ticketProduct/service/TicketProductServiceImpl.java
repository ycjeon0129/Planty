package com.planty.api.ticketProduct.service;

import com.planty.api.subscribeProduct.request.SubscribeProductRequest;
import com.planty.api.subscribeProduct.response.SubscribeProductDetailResponse;
import com.planty.api.subscribeProduct.response.SubscribeProductResponse;
import com.planty.api.subscribeProduct.service.SubscribeProductService;
import com.planty.api.ticketProduct.response.TicketProductResponse;
import com.planty.common.exception.handler.ExceptionHandler;
import com.planty.db.entity.GmInfo;
import com.planty.db.entity.PlantInfo;
import com.planty.db.entity.SubscribeProduct;
import com.planty.db.entity.TicketProduct;
import com.planty.db.repository.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

import static com.planty.common.util.LogCurrent.*;
import static com.planty.common.util.LogCurrent.START;

@Slf4j
@Service
@RequiredArgsConstructor
public class TicketProductServiceImpl implements TicketProductService {
    private final ViewUserConsultingRepository viewUserConsultingRepository;
    private final UserInfoRepository userInfoRepository;
    private final TimeTableRepository timeTableRepository;
    private final UserSubscribeRepository userSubscribeRepository;
    private final ConsultingBookingRepository consultingBookingRepository;
    private final GmInfoRepository gmInfoRepository;
    private final SubscribeProductRepository subscribeProductRepository;
    private final PlantyInfoRepository plantyInfoRepository;
    private final TicketProductRepository ticketProductRepository;
    @Override // 이용권 묶음상품 상품 조회
    public List<TicketProductResponse> getTicketProduct() {
        log.info(logCurrent(getClassName(), getMethodName(), START));

        List<TicketProductResponse> ticketProductResponse = new ArrayList<>();
        List<TicketProduct> list = ticketProductRepository.findAll();
        for(TicketProduct item : list) {
            TicketProductResponse ticket = TicketProductResponse.builder()
                    .tpid(item.getTpid())
                    .name(item.getName())
                    .count(item.getCount())
                    .price(item.getPrice())
                    .build();
            ticketProductResponse.add(ticket);
        }
        log.info(logCurrent(getClassName(), getMethodName(), END));
        return ticketProductResponse;
    }

    @Override // 이용권 묶음상품 상품 상세 조회
    public TicketProductResponse getTicketProductDetail(Long tpid) {
        log.info(logCurrent(getClassName(), getMethodName(), START));

        TicketProduct item = ticketProductRepository.findByTpid(tpid)
                .orElseThrow(() -> new NullPointerException(ExceptionHandler.TICKET_PRODUCT_NOT_FOUND));

        log.info(logCurrent(getClassName(), getMethodName(), END));
        return TicketProductResponse.builder()
                .tpid(item.getTpid())
                .name(item.getName())
                .count(item.getCount())
                .price(item.getPrice())
                .build();

    }
}