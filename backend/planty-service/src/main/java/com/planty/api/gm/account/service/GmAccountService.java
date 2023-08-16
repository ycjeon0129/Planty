package com.planty.api.gm.account.service;

import com.planty.api.gm.account.response.GmAccountResponse;
import com.planty.api.gm.account.response.GmWebRTCResponse;

import java.text.ParseException;
import java.util.List;
public interface GmAccountService {
    GmAccountResponse getGmActive();
    GmAccountResponse updateGmActive();

    List<GmWebRTCResponse> findRequest() throws ParseException;
}
