package com.planty.db.repository;

import com.planty.db.entity.ViewUserEmergency;
import com.planty.db.entity.ViewUserSubscribe;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ViewUserEmergencyRepository extends JpaRepository<ViewUserEmergency, Long> {
}