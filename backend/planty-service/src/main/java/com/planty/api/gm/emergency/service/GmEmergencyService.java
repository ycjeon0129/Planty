package com.planty.api.gm.emergency.service;

import com.planty.api.consulting.response.UserConsultingResponse;
import com.planty.api.emergency.response.EmergencyResponse;

import java.text.ParseException;
import java.util.List;

public interface GmEmergencyService {
    List<EmergencyResponse> findEmergencyList() throws ParseException;
}
