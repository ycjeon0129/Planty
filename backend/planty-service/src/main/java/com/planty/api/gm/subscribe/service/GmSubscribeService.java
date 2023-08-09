package com.planty.api.gm.subscribe.service;

import com.planty.api.gm.subscribe.response.GmSubscribeResponse;
import org.springframework.stereotype.Service;

import java.util.List;

public interface GmSubscribeService {

    List<GmSubscribeResponse> findSubscribeList();
}
