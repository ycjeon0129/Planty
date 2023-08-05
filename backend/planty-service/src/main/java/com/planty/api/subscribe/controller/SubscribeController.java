package com.planty.api.subscribe.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import java.util.List;

import com.planty.api.subscribe.response.UserSubscribeResponse;
import com.planty.api.subscribe.service.SubscribeService;
import static com.planty.common.util.LogCurrent.*;

@RestController
@Slf4j
@RequestMapping("/subscribes")
@RequiredArgsConstructor
public class SubscribeController {
    private final SubscribeService subscribeServiceImpl;
    @GetMapping
    public ResponseEntity<?> getAccusedReviewList() {

        log.info(logCurrent(getClassName(), getMethodName(), START));
        List<UserSubscribeResponse> subscribeList = subscribeServiceImpl.getUserSubscribe(2);

        if (!subscribeList.isEmpty()) {
            log.info(logCurrent(getClassName(), getMethodName(), END));
            System.out.println(subscribeList.toString());
            return ResponseEntity.ok().body(subscribeList);
        }
        log.info(logCurrent(getClassName(), getMethodName(), END));
        return ResponseEntity.noContent().build();

    }

}
