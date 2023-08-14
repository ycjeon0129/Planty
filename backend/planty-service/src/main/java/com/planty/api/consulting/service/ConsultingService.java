package com.planty.api.consulting.service;

import com.planty.api.consulting.request.ConsultingConnectionRequest;
import com.planty.api.consulting.response.ConsultingSessionResponse;
import com.planty.api.consulting.response.UserConsultingResponse;
import io.openvidu.java.client.OpenViduHttpException;
import io.openvidu.java.client.OpenViduJavaClientException;

import java.util.List;

public interface ConsultingService {
    List<UserConsultingResponse> getUserConsultingUid();
    List<UserConsultingResponse> getUserConsultingDetail(Long sid);

    ConsultingSessionResponse initializeSession(Long cid) throws OpenViduJavaClientException, OpenViduHttpException, IllegalAccessException;

    String createConnection(ConsultingConnectionRequest connectionInfo) throws OpenViduJavaClientException, OpenViduHttpException, IllegalAccessException;
}
