package com.planty.api.gm.account.service;

import com.planty.api.gm.account.request.GmJoinRequest;
import com.planty.api.gm.account.response.GmAccountResponse;
import com.planty.api.gm.account.response.GmLoginResponse;
import com.planty.api.gm.account.response.GmWebRTCResponse;
import com.planty.common.auth.PrincipalDetails;
import org.springframework.security.core.Authentication;

import java.text.ParseException;
import java.util.List;
public interface GmAccountService {
    void join(GmJoinRequest gmJoinInfo);
    GmLoginResponse login(Authentication authentication, PrincipalDetails principalDetails);

    GmAccountResponse getGmActive();

    GmAccountResponse updateGmActive();

    List<GmWebRTCResponse> findRequest() throws ParseException;
}
