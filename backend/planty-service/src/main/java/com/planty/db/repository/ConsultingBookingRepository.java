package com.planty.db.repository;

import com.planty.db.entity.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@Repository
public interface ConsultingBookingRepository extends JpaRepository<ConsultingBooking, Long> {
    Optional<ConsultingBooking> findBySidAndTimeIdxAndDate(UserSubscribe sid, TimeTable idx, String date);
    Optional<ConsultingBooking> findByUidAndCid(UserInfo uid, Long cid);
    List<ConsultingBooking> findByGidAndActiveAndCancel(GmInfo gmInfo, boolean active, boolean cancel);
    List<ConsultingBooking> findByUid(UserInfo uid);
    List<ConsultingBooking> findByGidAndDateOrderByTimeIdx(GmInfo gid, String date);
}