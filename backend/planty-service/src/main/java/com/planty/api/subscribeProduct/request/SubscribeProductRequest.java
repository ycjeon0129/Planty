package com.planty.api.subscribeProduct.request;

import com.planty.db.entity.GmInfo;
import lombok.*;


@NoArgsConstructor
@Data
@AllArgsConstructor
@Builder
@ToString
public class SubscribeProductRequest {
    @NonNull
    private String plantName;  // 식물 이름
    @NonNull
    private Integer tonic; // 식물 영양제 제공 주기 (주)
    @NonNull
    private Integer size; // 크기. 소(0), 중(1), 대(2)
    @NonNull
    private Integer place; // 생육 장소. 무관(0), 실내(1), 실외(2)
    @NonNull
    private Integer eatable; // 식용 여부. 식용(1), 비식용(0)

    @NonNull
    private Long gid; // GM 식별키
    @NonNull
    private String productName; // 구독 상품명
    @NonNull
    private Integer period; // 구독 기간 (주)
    @NonNull
    private Integer consultingCnt; // 컨설팅 횟수
    private String thumbnail; // 썸네일 이미지 : CDN 링크
    @NonNull
    private String description; // 상세설명
    @NonNull
    private Integer level; // 구독 상품 난이도, level : 1,2,3
    @NonNull
    private Integer price; // 구독 상품 가격

}