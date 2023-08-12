package com.planty.api.gm.subscribe.response;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@Getter
@Builder
@ToString
public class GmSubscribeResponse {

    private Long spid;
    private String name;
    private String thumbnail;
    private int subscriberCnt;
    private int period;

}
