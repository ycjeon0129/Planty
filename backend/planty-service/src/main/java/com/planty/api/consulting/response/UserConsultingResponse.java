package com.planty.api.consulting.response;

import lombok.Builder;
import lombok.Getter;
import lombok.NonNull;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Getter
@Builder
@ToString
public class UserConsultingResponse {
    @NonNull
    private Integer cid; // 컨설팅 예약 식별키

    @NonNull
    private Integer time; // 시간 식별기

    @NonNull
    private String date;  // 예약 날짜

    @NonNull
    private Boolean cancel; // 취소여부. 취소(1), 미취소(0)

    @NonNull
    private Boolean active; // 실행여부. 실행(1), 미실행(0)

    @NonNull
    private String subscribeProductName; // 구독 상품명

    private String recommendedStartDate; // 권장 상담 시작일

    private String recommendedEndDate; // 권장 상담 종료일

    private String advice; // 상담 내용

    private String startTime; // 실제 시작 시간

    private String endTime; // 실제 종료 시간
}