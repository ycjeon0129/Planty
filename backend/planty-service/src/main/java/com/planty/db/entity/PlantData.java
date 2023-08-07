package com.planty.db.entity;

import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import javax.persistence.*;
import java.io.Serializable;

@ToString
@Getter
@DynamicInsert // Apply changed fields only
@DynamicUpdate // Apply changed fields only
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "plant_data")
@Entity
public class PlantData implements Serializable {

    @Id
//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(referencedColumnName = "arduinoId", name = "arduino_id") // 아두이노 id
    @Column(name = "arduino_id")
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

    @Builder
    public PlantData(Integer arduinoId, String date, String time,
                     float temp, float humidity, float soil) {
        this.arduinoId = arduinoId;
        this.date = date;
        this.time = time;
        this.temp = temp;
        this.humidity = humidity;
        this.soil = soil;
    }
}
