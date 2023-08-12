package com.planty.db.entity;

import javax.persistence.*;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;

@ToString
@Getter
@Setter
@Builder
@AllArgsConstructor
@RequiredArgsConstructor
@NoArgsConstructor
@DynamicInsert
@Table(name = "plant_info")
@Entity
public class PlantInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idx", nullable = false) // 식물 식별키
    private Long idx;

    @NonNull
    @Column(name ="name", length = 128, nullable = false) // 식물 이름
    private String name;

    @NonNull
    @Column(name ="tonic_period", nullable = true) // 식물 영양제 제공 주기 (주)
    private Integer tonicPeriod;

    @Column(name = "size", length = 16, nullable = true) // 크기. 소(0), 중(1), 대(2)
    private Integer size;

    @Column(name = "place", length = 16, nullable = true) // 생육 장소. 무관(0), 실내(1), 실외(2)
    private Integer place;

    @Column(name = "eatable")
    @ColumnDefault("0")
    private Integer eatable; // 식용 여부. 식용(1), 비식용(0)
}