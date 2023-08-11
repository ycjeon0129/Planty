package com.planty.api.booking.response;

import lombok.*;

import javax.validation.constraints.NotNull;

@Getter
@Builder
@ToString
public class UserBookingResponse {
    @NotNull
    private Long sid; //사용자 구독정보 식별키
    @NotNull
    private Long cid; // 컨설팅 예약 식별키
    @NotNull
    private String greenmate; // Gm 닉네임
    @NotNull
    private String title; // 구독 상품명
    @NotNull
    private String date; // 예약 날짜
    @NotNull
    private Integer time; // 시간 식별키
    @NotNull
    private String user; // 사용자 이름

}
