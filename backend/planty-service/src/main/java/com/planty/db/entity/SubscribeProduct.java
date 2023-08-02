package com.planty.db.entity;

import jakarta.persistence.*;
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
    private Integer spid;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(referencedColumnName = "idx", name = "PLANT_INFO_idx")
    private PlantInfo plantInfoIdx;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(referencedColumnName = "gid", name = "GM_INFO_gid")
    private GmInfo GMInfoGid;

    @NonNull
    @Column(name = "name", length = 128, nullable = false)
    private String name;

    @NonNull
    @Column(name = "period", nullable = false)
    private Integer period;

    @NonNull
    @Column(name = "consulting_cnt", nullable = false)
    private Integer consultingCnt;

    @Column(name = "description")
    private String description;

    @NonNull
    @Column(name = "level", nullable = false)
    private Integer level;

    @NonNull
    @Column(name = "price", nullable = false)
    private Integer price;
}
