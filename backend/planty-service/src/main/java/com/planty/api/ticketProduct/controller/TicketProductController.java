package com.planty.api.ticketProduct.controller;

import com.planty.api.subscribeProduct.response.SubscribeProductDetailResponse;
import com.planty.api.subscribeProduct.response.SubscribeProductResponse;
import com.planty.api.subscribeProduct.service.SubscribeProductService;
import com.planty.api.ticketProduct.response.TicketProductResponse;
import com.planty.api.ticketProduct.service.TicketProductService;
import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.planty.common.util.LogCurrent.*;
import static com.planty.common.util.LogCurrent.END;
@RestController
@Slf4j
@RequestMapping("/api/ticket-products")
@RequiredArgsConstructor
@Api
public class TicketProductController {
    private final TicketProductService ticketProductService;

    @GetMapping // 이용권 묶음상품 상품 조회
    public ResponseEntity<?> getSubscribeProductList() {
        log.info(logCurrent(getClassName(), getMethodName(), START));
        List<TicketProductResponse> ticketProductList = ticketProductService.getTicketProduct();

        if (!ticketProductList.isEmpty()) {
            log.info(logCurrent(getClassName(), getMethodName(), END));
            return ResponseEntity.status(200).body(ticketProductList);
        }
        log.info(logCurrent(getClassName(), getMethodName(), END));
        return ResponseEntity.status(204).build();
//
    }

    @GetMapping("/{tpid}") // 이용권 묶음상품 상품 상세 조회
    public ResponseEntity<?> getUserSubscribeDetailList(@PathVariable("tpid") Long tpid) {
        log.info(logCurrent(getClassName(), getMethodName(), START));
        TicketProductResponse response = ticketProductService.getTicketProductDetail(tpid);
        if (response != null) {
            log.info(logCurrent(getClassName(), getMethodName(), END));
            return ResponseEntity.status(200).body(response);
        }
        return ResponseEntity.status(403).build();
    }
}
