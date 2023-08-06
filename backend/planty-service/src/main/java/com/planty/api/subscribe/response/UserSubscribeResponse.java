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

    private Boolean consultingCancel;

    private Boolean consultingActive;

    private String consultingTime;

    private Boolean consultingActivation;
}