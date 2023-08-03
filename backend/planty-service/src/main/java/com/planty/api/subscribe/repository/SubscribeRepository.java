package com.planty.api.subscribe.repository;


import com.planty.api.subscribe.response.FindSubscribeResponse;
import com.planty.db.entity.UserSubscribe;
import com.planty.db.entity.ViewUserSubscribe;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SubscribeRepository extends JpaRepository<ViewUserSubscribe, Long> {
    List<ViewUserSubscribe> findByUid(Integer uid);
}