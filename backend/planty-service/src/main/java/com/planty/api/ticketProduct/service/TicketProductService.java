package com.planty.api.ticketProduct.service;

import com.planty.api.ticketProduct.response.TicketProductResponse;

import java.util.List;

public interface TicketProductService {
    List<TicketProductResponse> getTicketProduct();
    TicketProductResponse getTicketProductDetail(Long tpid);
}
