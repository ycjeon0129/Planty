package com.planty.api.emergency.service;

import com.planty.api.emergency.response.EmergencyResponse;

import java.text.ParseException;
import java.util.List;

public interface EmergencyService {
    List<EmergencyResponse> findEmergencyList() throws ParseException;
}
