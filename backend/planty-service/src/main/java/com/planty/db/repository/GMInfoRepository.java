package com.planty.db.repository;

import com.planty.db.entity.GMInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface GMInfoRepository extends JpaRepository<GMInfo, Long> {
    Optional<GMInfo> findByGid(Long Gid);
}
