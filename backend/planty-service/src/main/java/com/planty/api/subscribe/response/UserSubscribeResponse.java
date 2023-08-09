package com.planty.api.subscribe.response;

import javax.validation.constraints.NotNull;
import lombok.*;

//@NoArgsConstructor
//@Data
//@AllArgsConstructor
//@Builder
@Getter
@Builder
@ToString
public class UserSubscribeResponse {
    @NotNull
    private Long sid; //사용자 구독정보 식별키

    @NotNull
    private String startDate;  // 구독 시작일

    private Boolean end;  // 종료 여부. 종료(0), 미종료(0)
    @NotNull
    private String title;  // 구독 상품명
    @NotNull
    private Integer consultingCnt;  // 구독 상품 컨설팅 횟수
    @NotNull
    private Integer consultingRemainCnt;  // 남은 컨설팅 횟수

    private String consultingDate; // 예약 날짜

    private Boolean consultingCancel; // 취소여부. 취소(1), 미취소(0)

    private Boolean consultingActive;  // 실행여부. 실행(1), 미실행(0)

    private Integer consultingTime; // 시간 식별키
}