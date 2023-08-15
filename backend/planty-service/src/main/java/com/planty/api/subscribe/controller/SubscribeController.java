package com.planty.api.subscribe.controller;

import com.planty.api.subscribe.request.UserSubscribeRequest;
import com.planty.api.subscribe.response.UserSubscribeDatailResponse;
import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import java.util.List;

import com.planty.api.subscribe.response.UserSubscribeResponse;
import com.planty.api.subscribe.service.SubscribeService;
import static com.planty.common.util.LogCurrent.*;
import static com.planty.common.util.LogCurrent.logCurrent;


@RestController
@Slf4j
@RequestMapping("/api/subscribes")
@RequiredArgsConstructor
@Api
public class SubscribeController {
    private final SubscribeService subscribeServiceImpl;
    @GetMapping // 사용자 구독 조회
    public ResponseEntity<?> getUserSubscribeList(
            @RequestParam(name = "done", required = false, defaultValue = "0") int done
    ) {

        log.info(logCurrent(getClassName(), getMethodName(), START));
        List<UserSubscribeResponse> subscribeList = subscribeServiceImpl.getUserSubscribe(done);

        if (!subscribeList.isEmpty()) {
            log.info(logCurrent(getClassName(), getMethodName(), END));
                return ResponseEntity.status(200).body(subscribeList);
        }
        log.info(logCurrent(getClassName(), getMethodName(), END));
        return ResponseEntity.status(204).build();
    }
    @GetMapping("/{sid}") // 사용자 구독 상세 조회
    public ResponseEntity<?> getUserSubscribeDetailList(@PathVariable("sid") Long sid) {

        log.info(logCurrent(getClassName(), getMethodName(), START));
        UserSubscribeDatailResponse response = subscribeServiceImpl.getUserSubscribeDetail(sid);
        if(response != null) {
            log.info(logCurrent(getClassName(), getMethodName(), END));
            return ResponseEntity.status(200).body(response);
        }
        return ResponseEntity.status(204).build();
    }

    @PostMapping() // 사용자 구독 등록
    public ResponseEntity<?> postUserSubscribe(@RequestBody UserSubscribeRequest userSubscribeRequest) {
        log.info(logCurrent(getClassName(), getMethodName(), START));
//        System.out.println(userSubscribeRequest.toString());
        if(subscribeServiceImpl.regUserSubscribe(userSubscribeRequest)){
            log.info(logCurrent(getClassName(), getMethodName(), END));
                return ResponseEntity.status(200).build();
        }
        log.info(logCurrent(getClassName(), getMethodName(), END));
        return ResponseEntity.status(406).build();
    }

    @DeleteMapping("/{sid}") // 사용자 구독 삭제
    public ResponseEntity<?> deleteUserSubscribe(@PathVariable("sid") Long sid) {
        log.info(logCurrent(getClassName(), getMethodName(), START));
        if(subscribeServiceImpl.deleteUserSubscribe(sid)){
            log.info(logCurrent(getClassName(), getMethodName(), END));
            return ResponseEntity.status(200).build();
        }
        log.info(logCurrent(getClassName(), getMethodName(), END));
        return ResponseEntity.status(500).build();
    }

}
