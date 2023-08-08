package com.planty.api.user.model.request;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class TokenRefreshRequest {

    private Long uid;
    private String email;
    private String refreshToken;

}
