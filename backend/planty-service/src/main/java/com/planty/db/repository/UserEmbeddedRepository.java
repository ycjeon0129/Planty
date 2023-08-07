package com.planty.db.repository;

import com.planty.api.embedded.response.UserSubscribeEmbeddedResponse;
import com.planty.db.entity.PlantData;
import com.planty.db.entity.UserSubscribe;
import com.planty.db.entity.ViewUserSubscribe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserEmbeddedRepository extends JpaRepository<PlantData, Long> {
    List<PlantData> findByArduinoId(Integer ArduinoId);
}
