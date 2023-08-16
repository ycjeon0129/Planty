package com.planty.api.embedded.service;

import com.planty.api.embedded.repuest.EmbeddedRequest;
import com.planty.api.embedded.response.UserSubscribeEmbeddedResponse;

import java.util.List;

public interface EmbeddedService {
    boolean regEmbedded (EmbeddedRequest embeddedRequest);
    List<UserSubscribeEmbeddedResponse> getEmbedded(Long cid);
}
