package com.planty.db.repository;

import com.planty.db.entity.*;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ConsultingLogRepository extends JpaRepository<ConsultingLog, Long> {
    Optional<ConsultingLog> findByCid(ConsultingBooking cid);
}
