package com.planty.db.repository;

import com.planty.db.entity.SubscribeProduct;
import com.planty.db.entity.TimeTable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface TimeTableRepository extends JpaRepository<TimeTable, Long> {
    Optional<TimeTable> findByIdx(Integer idx);
}