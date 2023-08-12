package com.planty.api.consulting.response;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Getter
@Builder
@ToString
@Setter
public class UserConsultingResponse {
    @NonNull
    private Long cid; // 컨설팅 예약 식별키

    private Long sid; // 사용자 구독정보 식별키

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

    @Builder
    public UserConsultingResponse(Long cid, Long sid, Integer time
    , String date, Boolean cancel, Boolean active, String subscribeProductName
    , String recommendedStartDate, String recommendedEndDate, String advice, String startTime, String endTime) {
        this.cid = cid;
        this.sid = sid;
        this.time = time;
        this.date = date;
        this.cancel = cancel;
        this.active = active;
        this.subscribeProductName = subscribeProductName;
        this.recommendedStartDate = recommendedStartDate;
        this.recommendedEndDate = recommendedEndDate;
        this.advice = advice;
        if(startTime != null && endTime != null) {
            this.startTime = startTime.split(" ")[1];
            this.endTime = endTime.split(" ")[1];
        }
    }
}