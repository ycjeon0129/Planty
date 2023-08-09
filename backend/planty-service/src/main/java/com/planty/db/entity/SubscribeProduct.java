package com.planty.db.entity;

import javax.persistence.*;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

@ToString
@Getter
@Setter
@Builder
@AllArgsConstructor
@RequiredArgsConstructor
@NoArgsConstructor
@DynamicInsert
@DynamicUpdate
@Table(name = "subscribe_product")
@Entity
public class SubscribeProduct {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "spid", nullable = false) // 식별키
    private Long spid;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(referencedColumnName = "idx", name = "PLANT_INFO_idx") // 식물 식별키
    private PlantInfo plantInfoIdx;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(referencedColumnName = "gid", name = "GM_INFO_gid") // GM 식별키
    private GMInfo GMInfoGid;

    @NonNull
    @Column(name = "name", length = 128, nullable = false) // 구독 상품명
    private String name;

    @NonNull
    @Column(name = "period", nullable = false) // 구독 기간 (주)
    private Integer period;

    @NonNull
    @Column(name = "consulting_cnt", nullable = false) // 컨설팅 횟수
    private Integer consultingCnt;

    @Column(name = "description") // 상세설명 : CDN 링크
    private String description;

    @NonNull
    @Column(name = "level", nullable = false) // 구독 상품 난이도, level : 1,2,3
    private Integer level;

    @NonNull
    @Column(name = "price", nullable = false) // 독 상품 가격
    private Integer price;
}
