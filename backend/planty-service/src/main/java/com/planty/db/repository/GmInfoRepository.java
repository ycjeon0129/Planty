package com.planty.db.repository;

import com.planty.db.entity.GmInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface GmInfoRepository extends JpaRepository<GmInfo, Long> {
    Optional<GmInfo> findByGid(Long Gid);
}
