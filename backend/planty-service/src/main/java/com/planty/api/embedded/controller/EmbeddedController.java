package com.planty.api.embedded.controller;

import com.planty.api.embedded.repuest.EmbeddedRequest;
import com.planty.api.embedded.service.EmbeddedService;
import io.swagger.annotations.Api;
import lombok.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import static com.planty.common.util.LogCurrent.*;
import static com.planty.common.util.LogCurrent.END;


@RestController
@Slf4j
@RequestMapping("/api/embedded")
@RequiredArgsConstructor
@Api
public class EmbeddedController {
    private final EmbeddedService embeddedService;


    @PostMapping() // 사용자 예약 등록
    public ResponseEntity<?> postUserBooking(@RequestBody EmbeddedRequest embeddedRequest) {
        log.info(logCurrent(getClassName(), getMethodName(), START));
        if (embeddedService.regEmbedded(embeddedRequest)) {
            log.info(logCurrent(getClassName(), getMethodName(), END));
            return ResponseEntity.status(200).build();
        }
        log.info(logCurrent(getClassName(), getMethodName(), END));
        return ResponseEntity.status(400).build();
    }
}