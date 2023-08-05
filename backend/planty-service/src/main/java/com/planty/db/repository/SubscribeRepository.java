package com.planty.db.repository;


import com.planty.db.entity.ViewUserSubscribe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SubscribeRepository extends JpaRepository<ViewUserSubscribe, Long> {
    List<ViewUserSubscribe> findByUid(Integer uid);
}