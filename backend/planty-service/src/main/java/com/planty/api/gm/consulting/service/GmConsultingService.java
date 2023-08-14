package com.planty.api.gm.consulting.service;

import com.planty.api.consulting.response.UserConsultingResponse;
import com.planty.api.gm.consulting.request.GmConsultingRecordRequest;

import java.util.List;

public interface GmConsultingService {
    List<UserConsultingResponse> findConsultingList(Long spid);

    String findSessionToken(Long cid);

    void deleteSession(GmConsultingRecordRequest recordInfo);

    void setStartTime(Long cid);
}
