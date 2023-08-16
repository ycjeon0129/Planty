package com.planty.api.embedded.controller;

import com.planty.api.embedded.repuest.EmbeddedRequest;
import com.planty.api.embedded.response.UserSubscribeEmbeddedResponse;
import com.planty.api.embedded.service.EmbeddedService;
import com.planty.api.subscribe.response.UserSubscribeResponse;
import io.swagger.annotations.Api;
import lombok.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import java.util.List;

import static com.planty.common.util.LogCurrent.*;
import static com.planty.common.util.LogCurrent.END;


@RestController
@Slf4j
@RequestMapping("/api/embedded")
@RequiredArgsConstructor
@Api
public class EmbeddedController {
    private final EmbeddedService embeddedService;


    @PostMapping() // 임베디드 데이터 등록
    public ResponseEntity<?> postUserEmbedded(@RequestBody EmbeddedRequest embeddedRequest) {
        log.info(logCurrent(getClassName(), getMethodName(), START));
        if (embeddedService.regEmbedded(embeddedRequest)) {
            log.info(logCurrent(getClassName(), getMethodName(), END));
            return ResponseEntity.status(200).build();
        }
        log.info(logCurrent(getClassName(), getMethodName(), END));
        return ResponseEntity.status(400).build();
    }

    @GetMapping ("/{cid}") // 임베디드 데이터 조회
    public ResponseEntity<?> getUserEmbedded(@PathVariable("cid") Long cid) {
        log.info(logCurrent(getClassName(), getMethodName(), START));
        List<UserSubscribeEmbeddedResponse> embeddedList = embeddedService.getEmbedded(cid);

        if (!embeddedList.isEmpty()) {
            log.info(logCurrent(getClassName(), getMethodName(), END));
            return ResponseEntity.status(200).body(embeddedList);
        }
        log.info(logCurrent(getClassName(), getMethodName(), END));
        return ResponseEntity.status(204).build();
    }
}