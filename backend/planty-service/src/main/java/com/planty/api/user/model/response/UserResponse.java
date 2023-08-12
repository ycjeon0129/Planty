package com.planty.api.user.model.response;

import com.planty.common.enums.UserType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class UserResponse {

    private Long uid;
    private String userId;
    private String userName;
    private String userEmail;
    private Integer emergencyCount;
    private String shippingAddress;
    private UserType userType;

}