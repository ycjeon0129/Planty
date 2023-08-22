package com.planty.common.oauth.provider;

import lombok.Getter;
import lombok.ToString;

import java.util.Map;

@Getter
@ToString
public class GoogleUser implements OAuthUserInfo{

    private Map<String, Object> attribute;

    public GoogleUser(Map<String, Object> attribute) {
        this.attribute = attribute;
    }

//    public String getCredential() { return (String) attribute.get("credential"); }

    @Override
    public String getProviderId() {
        return (String)attribute.get("sub");
    }

    @Override
    public String getProvider() {
        return "google";
    }

    @Override
    public String getEmail() {
        return (String)attribute.get("email");
    }

    @Override
    public String getName() {
        return (String)attribute.get("name");
    }

}
