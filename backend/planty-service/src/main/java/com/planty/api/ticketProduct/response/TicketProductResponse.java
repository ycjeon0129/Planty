package com.planty.api.ticketProduct.response;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

import javax.validation.constraints.NotNull;
@Getter
@Builder
@ToString
public class TicketProductResponse {
    @NotNull
    private Long tpid; // 응급실 이용권 묶음상품 식별키
    @NotNull
    private String name; // 응급실 이용권 묶음상품 이름
    @NotNull
    private Integer count; // 이용권 개수
    @NotNull
    private Integer price; // 가격
}