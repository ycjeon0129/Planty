package com.planty.db.repository;

import com.planty.db.entity.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface PlantDataRepository extends JpaRepository<PlantData, Long> {
    List<PlantData> findByArduinoId(Integer arduinoId);
    @Query(value = "select pd.date as date, avg(pd.temp) as temp, avg(pd.humidity) as humidity, avg(pd.soil) as soil from PlantData pd where pd.arduinoId  = :arduinoId GROUP BY pd.date")
    List<PlantDataAvgInterface> findDateAvgByArduinoId(@Param("arduinoId") Integer arduinoId);
}
