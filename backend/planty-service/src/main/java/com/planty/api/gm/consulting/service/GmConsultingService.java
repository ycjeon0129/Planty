package com.planty.api.gm.consulting.service;

import com.planty.api.consulting.response.UserConsultingResponse;
import com.planty.api.gm.consulting.request.GmConsultingRecordRequest;

import java.util.List;

public interface GmConsultingService {
    List<UserConsultingResponse> findConsultingList(Long spid);

    String findSessionToken(Long cid) throws IllegalAccessException;

    void deleteSession(GmConsultingRecordRequest recordInfo) throws IllegalAccessException;

    void setStartTime(Long cid);
}
