package com.planty.db.repository;

import com.planty.db.entity.UserInfo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserInfoRepository extends JpaRepository<UserInfo, Long> {

    /* OAuth */
    Optional<UserInfo> findByEmail(String email);

}
