package com.planty.api.payment.controller;

import com.planty.api.payment.request.PaymentInfoRequest;
import com.planty.api.payment.service.PaymentService;
import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
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


        return null;
    }

}
