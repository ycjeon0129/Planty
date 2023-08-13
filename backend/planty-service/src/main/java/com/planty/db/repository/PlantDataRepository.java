package com.planty.db.repository;

import com.planty.db.entity.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface PlantDataRepository extends JpaRepository<PlantData, Long> {
    List<PlantData> findByArduinoId(Integer arduinoId);
}
