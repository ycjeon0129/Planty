package com.planty.api.user.model.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class UserInfoDetailResponse {
    private String userId;
    private String userName;
    private String email;
    private String photo;
    private String joinDate;
    private int emergencyCount;
    private String shipping_address;
    private String userType;
}
