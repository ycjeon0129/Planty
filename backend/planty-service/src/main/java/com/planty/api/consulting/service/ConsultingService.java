package com.planty.api.consulting.service;

import com.planty.api.consulting.response.UserConsultingResponse;

import java.util.List;

public interface ConsultingService {
    List<UserConsultingResponse> getUserConsultingUid(Integer uid);
    List<UserConsultingResponse> getUserConsultingSid(Integer sid);
}
