package com.planty.db.repository;

import com.planty.db.entity.*;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface EmergencyLogRepository extends JpaRepository<EmergencyLog, Long> {
    List<EmergencyLog> findByGid(GmInfo gid);
}
