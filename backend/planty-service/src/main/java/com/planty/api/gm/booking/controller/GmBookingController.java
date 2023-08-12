package com.planty.api.gm.booking.controller;

import com.planty.api.booking.response.BookingResponse;
import com.planty.api.booking.service.BookingService;
import com.planty.api.gm.booking.service.GmBookingService;
import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static com.planty.common.util.LogCurrent.*;
import static com.planty.common.util.LogCurrent.END;

@RestController
@Slf4j
@RequestMapping("/api/greenmates/bookings")
@RequiredArgsConstructor
@Api
public class GmBookingController {
    private final GmBookingService gmBookingServiceImpl;

    @GetMapping // 그린메이트 예약 조회
    public ResponseEntity<?> getUserBooking() {
        log.info(logCurrent(getClassName(), getMethodName(), START));
        List<BookingResponse> bookingList = gmBookingServiceImpl.getGmBooking();

        if (!bookingList.isEmpty()) {
            log.info(logCurrent(getClassName(), getMethodName(), END));
            return ResponseEntity.status(200).body(bookingList);
        }
        log.info(logCurrent(getClassName(), getMethodName(), END));
        return ResponseEntity.status(204).build();
    }

}