package com.planty.api.emergency.response;

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
    private String user;
    @NonNull
    private String greenmate;
    @NonNull
    private String name;
    @NonNull
    private String advice;
    @NonNull
    private Boolean type;
    @NonNull
    private String startTime;
    @NonNull
    private String endTime;
    @NonNull
    private String timeTaken;
}
