package com.planty.api.gm.subscribe.response;

import lombok.*;

@Getter
@Builder
@ToString
public class GmSubscribeDetailResponse {

    private Long spid;
    private String name;
    private String thumbnail;
    private int consultingCnt;
    private int period;
    private int price;
    private int level;
    private String plant;

}
