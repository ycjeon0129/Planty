package com.planty.api.subscribe.response;

import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.time.LocalDateTime;

@NoArgsConstructor
@Data
@AllArgsConstructor
@Builder
public class FindSubscribeResponse {
    @NotNull
    private String subscribeProductName;
    @NotNull
    private Integer subscribePeriod;
    @NotNull
    private Integer consultingCnt;
    @NotNull
    private String description;
    @NotNull
    private Integer consultingRemainCnt;
    @NotNull
    private LocalDateTime startDate;
    @NotNull
    private Integer arduinoId;
    @NotNull
    private String GMNickname;
}