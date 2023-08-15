package com.planty.db.repository;


import com.planty.db.entity.ViewUserSubscribe;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ViewUserSubscribeRepository extends JpaRepository<ViewUserSubscribe, Long> {
    List<ViewUserSubscribe> findByUid(Long uid);
    List<ViewUserSubscribe> findByUid(Long uid, Sort sort);
    List<ViewUserSubscribe> findByUidAndEndDateNull(Long uid, Sort sort);
    List<ViewUserSubscribe> findByUidAndEndDateNotNull(Long uid, Sort sort);

    Optional<ViewUserSubscribe> findByUidAndSid(Long uid, Long sid);
}