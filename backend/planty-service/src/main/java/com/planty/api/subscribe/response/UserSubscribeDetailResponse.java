package com.planty.api.subscribe.response;

import com.planty.api.embedded.response.UserSubscribeEmbeddedResponse;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

import javax.validation.constraints.NotNull;
import java.util.List;

@Getter
@Builder
@ToString
public class UserSubscribeDetailResponse {
    @NotNull
    private Long sid; // 사용자 구독정보 식별키

    @NotNull
    private String startDate; // 구독 시작일

    private String endDate; // 구독 종료일

    private Boolean end;  // 종료 여부. 종료(0), 미종료(0)

    @NotNull
    private String title; // 구독 상품명

    private String thumbnail;  // 구독 상품 썸네일 이미지 CDN 링크

    @NotNull
    private String plant; // 식물 이름

    @NotNull
    private String greenmate; // Gm 닉네임

    @NotNull
    private Integer consultingCnt; // 구독 상품 컨설팅 횟수

    @NotNull
    private Integer consultingRemainCnt; // 남은 컨설팅 횟수

    private NearConsultingResponse nearConsulting;  // 마지막 예약 정보

    private List<UserSubscribeEmbeddedResponse> embeddedInfo; //식물 데이터 리스트
}
