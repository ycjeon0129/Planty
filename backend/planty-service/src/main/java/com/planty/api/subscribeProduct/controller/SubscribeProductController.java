package com.planty.api.subscribeProduct.controller;

import com.planty.api.subscribe.request.UserSubscribeRequest;
import com.planty.api.subscribe.response.UserSubscribeDetailResponse;
import com.planty.api.subscribe.response.UserSubscribeResponse;
import com.planty.api.subscribe.service.SubscribeService;
import com.planty.api.subscribeProduct.request.SubscribeProductRequest;
import com.planty.api.subscribeProduct.response.SubscribeProductDetailResponse;
import com.planty.api.subscribeProduct.response.SubscribeProductResponse;
import com.planty.api.subscribeProduct.service.SubscribeProductService;
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
@RequestMapping("/api/subscribe-products")
@RequiredArgsConstructor
@Api
public class SubscribeProductController {
    private final SubscribeProductService subscribeProductService;

    @GetMapping // 구독 상품 조회
    public ResponseEntity<?> getSubscribeProductList(
            @RequestParam(name = "size", required = false, defaultValue = "-1") int size,
            @RequestParam(name = "place", required = false, defaultValue = "-1") int place,
            @RequestParam(name = "eatable", required = false, defaultValue = "-1") int eatable
    ) {

        log.info(logCurrent(getClassName(), getMethodName(), START));
        List<SubscribeProductResponse> subscribeProducList = subscribeProductService.getSubscribeProduct(size, place, eatable);

        if (!subscribeProducList.isEmpty()) {
            log.info(logCurrent(getClassName(), getMethodName(), END));
            return ResponseEntity.status(200).body(subscribeProducList);
        }
        log.info(logCurrent(getClassName(), getMethodName(), END));
        return ResponseEntity.status(204).build();
    }

    @GetMapping("/{spid}") // 구독 상품 상세 조회
    public ResponseEntity<?> getUserSubscribeDetailList(@PathVariable("spid") Long spid) {

        log.info(logCurrent(getClassName(), getMethodName(), START));
        SubscribeProductDetailResponse response = subscribeProductService.getSubscribeProductDetail(spid);
        if (response != null) {
            log.info(logCurrent(getClassName(), getMethodName(), END));
            return ResponseEntity.status(200).body(response);
        }
        return ResponseEntity.status(403).build();
    }

    @PostMapping() // 사용자 구독 등록
    public ResponseEntity<?> postSubscribeProduct(@RequestBody SubscribeProductRequest subscribeProductRequest) {
        log.info(logCurrent(getClassName(), getMethodName(), START));
//        System.out.println(userSubscribeRequest.toString());
        if(subscribeProductService.regSubscribeProduct(subscribeProductRequest)){
            log.info(logCurrent(getClassName(), getMethodName(), END));
            return ResponseEntity.status(200).build();
        }
        log.info(logCurrent(getClassName(), getMethodName(), END));
        return ResponseEntity.status(406).build();
    }
}