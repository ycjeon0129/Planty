package com.planty.api.gm.consulting.service;

import com.planty.api.consulting.response.UserConsultingResponse;
import com.planty.api.gm.consulting.request.GmConsultingRecordRequest;
import com.planty.common.model.SessionTokenResponse;
import io.openvidu.java.client.OpenViduHttpException;
import io.openvidu.java.client.OpenViduJavaClientException;

import java.util.List;

public interface GmConsultingService {
    List<UserConsultingResponse> findConsultingList(Long spid);

    SessionTokenResponse findSessionToken(Long cid) throws IllegalAccessException, OpenViduJavaClientException, OpenViduHttpException;

    void deleteSession(GmConsultingRecordRequest recordInfo) throws IllegalAccessException;

    void setStartTime(Long cid);
}
