package com.planty.api.gm.subscribe.service;

import com.planty.api.gm.subscribe.response.GMSubscribeResponse;
import com.planty.common.util.SecurityUtil;
import com.planty.db.entity.GMInfo;
import com.planty.db.entity.UserSubscribe;
//import com.planty.db.entity.UserSubscribeSpidMapping;
import com.planty.db.repository.GMInfoRepository;
import com.planty.db.repository.SubscribeProductRepository;
import com.planty.db.repository.UserSubscribeRepository;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import lombok.RequiredArgsConstructor;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class GMSubscribeServiceImpl implements GMSubscribeService {

    private final GMInfoRepository gMInfoRepository;
    private final SubscribeProductRepository subscribeProductRepository;
    private final UserSubscribeRepository userSubscribeRepository;

//    @Override
//    public List<GMSubscribeResponse> findSubscribeList() {
////        Long gid = SecurityUtil.getCurrentGid();
////        GMInfo gMInfo = gMInfoRepository.findByGid(gid)
////                .orElseThrow();
//////        ArrayList<GMSubscribeResponse> list = new ArrayList<GMSubscribeResponse>();
////        List<UserSubscribeSpidMapping> userSubscribelist = userSubscribeRepository.findDistinctByGid_Gid(gMInfo);
////        for (UserSubscribeSpidMapping us : userSubscribelist) {
////            System.out.println(us.getSpid());
////
////        }
//////        List<GMSubscribeResponse>
////        return list;
//        return null;
//    }

}
