package com.planty.api.payment.controller;

import com.planty.api.payment.request.PaymentInfoRequest;
import com.planty.api.payment.service.PaymentService;
import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@Slf4j
@RequestMapping("/api/payments")
@RequiredArgsConstructor
@Api
public class PaymentController {

    private final PaymentService paymentService;

    @PostMapping
    public ResponseEntity<?> payment(@RequestBody PaymentInfoRequest paymentInfo) {
        if (paymentInfo.getType() == 0) {
            paymentService.subscribePayment(paymentInfo.getIdx());
        } else if (paymentInfo.getType() == 1) {
            paymentService.ticketPayment(paymentInfo.getIdx());
        } else {
            return new ResponseEntity(null, HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity(null, HttpStatus.OK);
    }

}
