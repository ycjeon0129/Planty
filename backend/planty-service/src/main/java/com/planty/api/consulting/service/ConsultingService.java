package com.planty.api.consulting.service;

import com.planty.api.consulting.response.UserConsultingResponse;

import java.util.List;

public interface ConsultingService {
    List<UserConsultingResponse> getUserConsultingUid();
    List<UserConsultingResponse> getUserConsultingDetail(Long sid);
}
