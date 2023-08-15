package com.planty.api.gm.emergency.service;

import com.planty.api.consulting.response.UserConsultingResponse;
import com.planty.api.emergency.response.EmergencyResponse;
import com.planty.api.gm.emergency.request.GmEmergencyRecordRequest;
import com.planty.common.model.SessionTokenResponse;
import io.openvidu.java.client.OpenViduHttpException;
import io.openvidu.java.client.OpenViduJavaClientException;

import java.text.ParseException;
import java.util.List;

public interface GmEmergencyService {
    List<EmergencyResponse> findEmergencyList() throws ParseException;

    SessionTokenResponse findSessionToken(Long eid) throws OpenViduJavaClientException, OpenViduHttpException, IllegalAccessException;

    void deleteSession(GmEmergencyRecordRequest recordInfo) throws IllegalAccessException;

    void setStartTime(Long eid);
}
