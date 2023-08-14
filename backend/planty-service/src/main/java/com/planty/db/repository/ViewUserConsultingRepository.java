package com.planty.db.repository;

import com.planty.db.entity.ConsultingBooking;
import com.planty.db.entity.UserInfo;
import com.planty.db.entity.ViewUserConsulting;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface ViewUserConsultingRepository extends JpaRepository<ViewUserConsulting, Long> {
    List<ViewUserConsulting> findByUid(Long userId, Sort sort);
    List<ViewUserConsulting> findByGid(Long gid, Sort sort);
    List<ViewUserConsulting> findByGidAndSpid(Long gid, Long spid, Sort sort);
    List<ViewUserConsulting> findByUidAndSid(Long uid, Long sid, Sort sort);
    @Query(value = "select cb from ConsultingBooking cb where cb.cid in (select max(cid) from ConsultingBooking group by sid) and cb.uid = :uid")
    List<ConsultingBooking> findConsultingBooking(@Param("uid") UserInfo uid);

}
