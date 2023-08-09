package com.planty.db.repository;

import com.planty.db.entity.PlantInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PlantyInfoRepository extends JpaRepository<PlantInfo, Long> {
    Optional<PlantInfo> findByIdx(Long idx);
}
