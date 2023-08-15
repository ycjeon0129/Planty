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

    private String endDate;  // 구독 시작일

    private Boolean end;  // 종료 여부. 종료(0), 미종료(0)

    @NotNull
    private String title;  // 구독 상품명

    private String thumbnail;  // 구독 상품 썸네일 이미지 CDN 링크

    @NotNull
    private Integer consultingCnt;  // 구독 상품 컨설팅 횟수

    @NotNull
    private Integer consultingRemainCnt;  // 남은 컨설팅 횟수

    private String greenmate;

    private NearConsultingResponse nearConsulting;  // 마지막 예약 정보

}