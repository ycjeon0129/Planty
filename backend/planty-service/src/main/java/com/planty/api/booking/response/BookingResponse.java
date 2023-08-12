package com.planty.api.booking.response;

import lombok.*;

import javax.validation.constraints.NotNull;

@Getter
@Builder
@ToString
public class BookingResponse {
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

    private Boolean cancel; // 취소여부. 취소(1), 미취소(0)

    private Boolean active;  // 실행여부. 실행(1), 미실행(0)
}
