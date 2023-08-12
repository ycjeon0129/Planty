package com.planty.api.gm.emergency.response;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Id;

@Getter
@Builder
@ToString
@Setter
public class GmEmergencyResponse {
    @NonNull
    private Long eid;
    @NonNull
    private Boolean type;
    @NonNull
    private String name;
    @NonNull
    private String startTime;
    @NonNull
    private String endTime;
    @NonNull
    private String timeTaken;
    @NonNull
    private String advice;
    @NonNull
    private String greenmate;
    @NonNull
    private String user;
}
