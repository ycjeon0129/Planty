package com.planty.api.gm.consulting.service;

import com.planty.api.consulting.response.UserConsultingResponse;

import java.util.List;

public interface GmConsultingService {
    List<UserConsultingResponse> findConsultingList(Long spid);

    String findSessionToken(Long cid);

    void deleteSession(Long cid);

    void setStartTime(Long cid);
}
