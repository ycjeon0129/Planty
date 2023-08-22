package com.planty.api.user.request;

import lombok.Data;

@Data
public class UserLoginRequest {

    private String username;
    private String password;

}
