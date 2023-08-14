package com.planty.api.gm.account.service;

import com.planty.api.gm.account.response.GmAccountResponse;
import com.planty.api.subscribe.response.UserSubscribeResponse;

import java.util.List;
public interface GmAccountService {
    GmAccountResponse getGmActive();
    GmAccountResponse updateGmActive();
}
