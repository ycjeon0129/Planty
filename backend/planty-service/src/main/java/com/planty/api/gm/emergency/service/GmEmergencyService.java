package com.planty.api.gm.emergency.service;

import com.planty.api.consulting.response.UserConsultingResponse;
import com.planty.api.gm.emergency.response.GmEmergencyResponse;

import java.text.ParseException;
import java.util.List;

public interface GmEmergencyService {
    List<GmEmergencyResponse> findConsultingList();
}
