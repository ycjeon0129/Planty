package com.planty.api.subscribe.response;

import jakarta.persistence.Column;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.time.LocalDateTime;

//@NoArgsConstructor
//@Data
//@AllArgsConstructor
//@Builder
@Getter
@Builder
@ToString
public class FindSubscribeResponse {
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