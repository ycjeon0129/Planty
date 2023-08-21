package com.planty.db.repository;

import com.planty.db.entity.UserInfo;
import org.apache.catalina.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserInfoRepository extends JpaRepository<UserInfo, Long> {

    /* OAuth */
    Optional<UserInfo> findByUserEmail(String userEmail);
    Optional<UserInfo> findByUid(Long uid);
    Optional<UserInfo> findByUserId(String userId);
    UserInfo findByUserName(String userName);

}
