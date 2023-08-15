package com.planty.api.payment.service;

public interface PaymentService {
    void subscribePayment(Long spid);
    void ticketPayment(Long tpid);

}
