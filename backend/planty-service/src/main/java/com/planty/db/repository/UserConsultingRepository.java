package com.planty.db.repository;

import com.planty.db.entity.ViewUserConsulting;
import com.planty.db.entity.ViewUserConsultingMapping;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface UserConsultingRepository extends JpaRepository<ViewUserConsulting, Long> {
    List<ViewUserConsulting> findByUid(Integer userId);
    List<ViewUserConsulting> findBySid(Integer sid);
}
