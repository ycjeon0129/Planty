package com.planty.api.subscribeProduct.response;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

import javax.validation.constraints.NotNull;
@Getter
@Builder
@ToString
public class SubscribeProductResponse {
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
}