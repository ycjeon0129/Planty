package com.planty.api.gm.emergency.service;

import com.planty.api.consulting.response.UserConsultingResponse;
import com.planty.api.emergency.response.EmergencyResponse;
import com.planty.api.gm.emergency.request.GmEmergencyRecordRequest;

import java.text.ParseException;
import java.util.List;

public interface GmEmergencyService {
    List<EmergencyResponse> findEmergencyList() throws ParseException;

    String findSessionToken(Long eid);

    void deleteSession(GmEmergencyRecordRequest recordInfo) throws IllegalAccessException;

    void setStartTime(Long eid);
}
