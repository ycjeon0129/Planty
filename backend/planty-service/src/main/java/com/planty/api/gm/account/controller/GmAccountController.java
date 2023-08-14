package com.planty.api.gm.account.controller;

import com.planty.api.booking.response.BookingResponse;
import com.planty.api.gm.account.response.GmAccountResponse;
import com.planty.api.gm.account.service.GmAccountService;
import com.planty.api.gm.booking.response.GmBookingResponse;
import com.planty.api.gm.booking.service.GmBookingService;
import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.planty.common.util.LogCurrent.*;
import static com.planty.common.util.LogCurrent.END;
@RestController
@Slf4j
@RequestMapping("/api/greenmates")
@RequiredArgsConstructor
@Api
public class GmAccountController {
    private final GmAccountService gmAccountService;

    @GetMapping ("/active") // GM 활성화 상태 조회
    public ResponseEntity<?> getGmActive() {
        log.info(logCurrent(getClassName(), getMethodName(), START));
        GmAccountResponse gmAccountResponse = gmAccountService.getGmActive();

        if (gmAccountResponse != null) {
            log.info(logCurrent(getClassName(), getMethodName(), END));
            return ResponseEntity.status(200).body(gmAccountResponse);
        }
        log.info(logCurrent(getClassName(), getMethodName(), END));
        return ResponseEntity.status(404).build();
    }

    @PostMapping("/active") // GM 활성화 상태 변경
    public ResponseEntity<?> updateGmActive() {
        log.info(logCurrent(getClassName(), getMethodName(), START));
        GmAccountResponse gmAccountResponse = gmAccountService.updateGmActive();

        if (gmAccountResponse != null) {
            log.info(logCurrent(getClassName(), getMethodName(), END));
            return ResponseEntity.status(200).body(gmAccountResponse);
        }
        log.info(logCurrent(getClassName(), getMethodName(), END));
        return ResponseEntity.status(404).build();
    }

}