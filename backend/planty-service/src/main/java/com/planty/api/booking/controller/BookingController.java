package com.planty.api.booking.controller;

import com.planty.api.booking.request.UserBookingRequest;
import com.planty.api.booking.response.BookingResponse;
import com.planty.api.booking.service.BookingService;
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
@RequestMapping("/api/bookings")
@RequiredArgsConstructor
@Api
public class BookingController {
    private final BookingService bookingServiceImpl;

    @GetMapping // 사용자 예약 조회
    public ResponseEntity<?> getUserBooking() {
        log.info(logCurrent(getClassName(), getMethodName(), START));
        List<BookingResponse> bookingList = bookingServiceImpl.getUserBooking();

        if (!bookingList.isEmpty()) {
            log.info(logCurrent(getClassName(), getMethodName(), END));
            return ResponseEntity.status(200).body(bookingList);
        }
        log.info(logCurrent(getClassName(), getMethodName(), END));
        return ResponseEntity.status(204).build();
    }

    @GetMapping("/{date}/{sid}") // 예약 날짜 조회
    public ResponseEntity<?> getUserBookingDate(@PathVariable("date") String date, @PathVariable("sid") Long sid) {
        log.info(logCurrent(getClassName(), getMethodName(), START));
        boolean[] bookingList = bookingServiceImpl.getUserBookingDate(sid, date);

        if (bookingList.length != 0) {
            log.info(logCurrent(getClassName(), getMethodName(), END));
            return ResponseEntity.status(200).body(bookingList);
        }
        log.info(logCurrent(getClassName(), getMethodName(), END));
        return ResponseEntity.status(204).build();
    }

    @PostMapping() // 사용자 예약 등록
    public ResponseEntity<?> postUserBooking(@RequestBody UserBookingRequest userConsultingRequest) {
        log.info(logCurrent(getClassName(), getMethodName(), START));
        if(bookingServiceImpl.regUserBooking(userConsultingRequest)){
            log.info(logCurrent(getClassName(), getMethodName(), END));
            return ResponseEntity.status(200).build();
        }
        log.info(logCurrent(getClassName(), getMethodName(), END));
        return ResponseEntity.status(404).build();
    }

    @DeleteMapping("/{cid}") // 사용자 예약 삭제
    public ResponseEntity<?> deleteUserBooking(@PathVariable("cid") Long cid) {
        log.info(logCurrent(getClassName(), getMethodName(), START));
        if(bookingServiceImpl.deleteUserBooking(cid)){
            log.info(logCurrent(getClassName(), getMethodName(), END));
            return ResponseEntity.status(200).build();
        }
        log.info(logCurrent(getClassName(), getMethodName(), END));
        return ResponseEntity.status(500).build();
    }
}
