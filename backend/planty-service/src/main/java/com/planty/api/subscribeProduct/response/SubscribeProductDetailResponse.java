package com.planty.api.subscribeProduct.response;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

import javax.validation.constraints.NotNull;
@Getter
@Builder
@ToString
public class SubscribeProductDetailResponse {
    @NotNull
    private Long spid; // 구독상품 식별키
    @NotNull
    private String name; // 구독상품명
    private String imgUrl; // 이미지URL
    @NotNull
    private Integer period; // 구독 기간
    @NotNull
    private String plantName;// 식물이름
    @NotNull
    private Integer price;// 가격
    @NotNull
    private Integer level; // 난이도

    private String description; //상세설명

    private Integer size; // 크기. 소(0), 중(1), 대(2)
    private Integer place; // 생육 장소. 무관(0), 실내(1), 실외(2)
    private Integer eatable; // 식용 여부. 식용(1), 비식용(0)

    private String greenmate; // 담당그린메이트
    private Integer consultingCnt;  // 컨설팅 횟수
}