package com.planty.api.gm.account.response;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@Getter
@Builder
@ToString
public class GmWebRTCResponse {

    private int webRTCType;
    private Long idx;
    private int emergencyType;
    private int minutesAgo;
    private String username;

}
