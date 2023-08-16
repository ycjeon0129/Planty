package com.planty.db.entity;

public interface PlantDataAvgInterface {
    String getDate();  // 측정일
    float getTemp(); // 온도
    float getHumidity(); // 습도
    float getSoil(); // 토양습도
}
