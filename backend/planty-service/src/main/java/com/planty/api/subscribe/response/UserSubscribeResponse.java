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
    private Integer arduinoId;
    @NotNull
    private Integer consultingRemainCnt;
    @NotNull
    private String startDate;
    private String endDate;
    @NotNull
    private String spName;
    @NotNull
    private Integer period;
    @NotNull
    private Integer consultingCnt;
    @NotNull
    private String description;
    @NotNull
    private String piName;
    @NotNull
    private Integer tonicPeriod;
    @NotNull
    private String GMNickname;

    private String cbDate;
}