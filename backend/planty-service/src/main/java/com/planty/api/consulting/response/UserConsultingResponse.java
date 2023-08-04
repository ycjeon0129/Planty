package com.planty.api.consulting.response;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

import javax.validation.constraints.NotNull;

@Getter
@Builder
@ToString
public class UserConsultingResponse {
    @NotNull
    private Integer cid;
    @NotNull
    private String date;
    @NotNull
    private Integer time;
    @NotNull
    private Boolean active;
    @NotNull
    private Boolean cancel;
    @NotNull
    private String subscribeProductName;
    @NotNull
    private String startTime;
    @NotNull
    private String endTime ;
    @NotNull
    private String recommendedStartDate;
    @NotNull
    private String recommendedEndDate;
    @NotNull
    private String advice;
}