package com.planty.api.gm.consulting.service;

import com.planty.api.consulting.response.UserConsultingResponse;

import java.util.List;

public interface GmConsultingService {
    List<UserConsultingResponse> findConsultingList(Long spid);
}
