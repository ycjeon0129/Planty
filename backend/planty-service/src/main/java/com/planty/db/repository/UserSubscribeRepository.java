package com.planty.db.repository;

import com.planty.db.entity.SubscribeProduct;
import com.planty.db.entity.UserInfo;
import com.planty.db.entity.UserSubscribe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserSubscribeRepository extends JpaRepository<UserSubscribe, Long> {
    Optional<UserSubscribe> findByUidAndSpid(UserInfo uid, SubscribeProduct spid);

    Optional<UserSubscribe> findByUidAndSid(UserInfo uid, Long sid);
}
