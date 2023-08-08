package com.planty.db.entity;

import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import javax.persistence.*;
import java.io.Serializable;

@ToString
@Builder
@Getter
@DynamicInsert // Apply changed fields only
@DynamicUpdate // Apply changed fields only
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "plant_data")
@Entity
@Embeddable
public class PlantData{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idx", nullable = false)
    private Long idx;

//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(referencedColumnName = "arduino_id", name = "arduino_id") // 아두이노 id
    @Column(name = "arduino_id") // 아두이노 id
    private Integer arduinoId;

    @Column(name = "date") // 측정일
    private String date;

    @Column(name = "time") // 측정시간
    private String time;

    @Column(name = "temp") // 온도
    private float temp;

    @Column(name = "humidity") // 습도
    private float humidity;

    @Column(name = "soil") // 토양습도
    private float soil;
}
