package com.planty.common.oauth.provider;

public interface OAuthUserInfo {

//    String getCredential();
    String getProviderId();
    String getProvider();
    String getEmail();
    String getName();
}
