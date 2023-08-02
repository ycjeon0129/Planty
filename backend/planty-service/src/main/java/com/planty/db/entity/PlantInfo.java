package com.planty.db.entity;

import jakarta.persistence.*;
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
    @Column(name = "idx", nullable = false) // 식별키
    private Integer idx;

    @NonNull
    @Column(name ="id", length = 128, nullable = false) // 이름
    private String id;

    @NonNull
    @Column(name ="tonic_period", nullable = true) //비밀번호
    private Integer tonicPeriod;

    @Column(name = "size", length = 16, nullable = true)
    private String size;

    @Column(name = "place", length = 16, nullable = true)
    private String place;

    @Column(name = "edible")
    @ColumnDefault("0")
    private Integer edible;
}