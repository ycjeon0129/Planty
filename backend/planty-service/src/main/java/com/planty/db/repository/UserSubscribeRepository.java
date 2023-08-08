package com.planty.db.repository;


import com.planty.db.entity.UserInfo;
import com.planty.db.entity.ViewUserSubscribe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserSubscribeRepository extends JpaRepository<ViewUserSubscribe, Long> {
    List<ViewUserSubscribe> findByUid(Long uid);
    Optional<ViewUserSubscribe> findByUidAndSid(Long uid, Long sid);
}