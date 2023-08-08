package com.planty.api.consulting.service;

import com.planty.api.consulting.response.UserConsultingResponse;

import java.util.List;

public interface ConsultingService {
    List<UserConsultingResponse> getUserConsultingUid(String userId);
    List<UserConsultingResponse> getUserConsultingDetail(String userId, Long sid);
}
