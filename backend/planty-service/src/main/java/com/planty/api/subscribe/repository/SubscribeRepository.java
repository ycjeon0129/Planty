package com.planty.api.subscribe.repository;


import com.planty.api.subscribe.response.FindSubscribeResponse;
import com.planty.db.entity.UserSubscribe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SubscribeRepository extends JpaRepository<UserSubscribe, Long> {

//    List<FindSubscribeResponse> findAllBySid(Long sid);
//    @Query(value = "select sp.name, sp.period, sp.consultingCnt, sp.description," +
//            "us.consultingRemainCnt, us.arduinoId, us.startDate, gm.nickname from SubscribeProduct sp " +
//            "join UserSubscribe us on sp.spid = us.subscribeProductSpid join GmInfo gm on gm.gid = sp.GMInfoGid join User ui on ui.uid = :id")
    List<FindSubscribeResponse> findAllBySid(@Param("id") Long sid);
}