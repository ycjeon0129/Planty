package com.planty.api.subscribe.response;

import com.planty.api.embedded.response.UserSubscribeEmbeddedResponse;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

import javax.validation.constraints.NotNull;
import java.util.List;

@Getter
@Builder
@ToString
public class UserSubscribeDatailResponse {
    @NotNull
    private Integer sid;

    @NotNull
    private String startDate;

    private String endDate;
    @NotNull
    private String title;
    @NotNull
    private Integer consultingCnt;
    @NotNull
    private Integer consultingRemainCnt;

    private String consultingDate;

    private Boolean consultingCancel;

    private Boolean consultingActive;

    private Integer consultingTime;

    private List<UserSubscribeEmbeddedResponse> embeddedInfo;
}
