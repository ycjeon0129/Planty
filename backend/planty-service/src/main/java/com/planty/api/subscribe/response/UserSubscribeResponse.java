package com.planty.api.subscribe.response;

import javax.validation.constraints.NotNull;
import lombok.*;

//@NoArgsConstructor
//@Data
//@AllArgsConstructor
//@Builder
@Getter
@Builder
@ToString
public class UserSubscribeResponse {
    @NotNull
    private Integer sid;

    private Integer arduinoId;

    @NotNull
    private String startDate;

    private Boolean end;
    @NotNull
    private String subscribeProductName;
    @NotNull
    private Integer consultingCnt;
    @NotNull
    private Integer consultingRemainCnt;

    private String consultingDate;

    private Integer consultingTime;
}