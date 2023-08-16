package com.planty.api.embedded.response;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

import javax.validation.constraints.NotNull;

@Getter
@Builder
@ToString
public class UserSubscribeEmbeddedResponse {
    @NotNull
    private String date; // 측정일

//    @NotNull
//    private String time; // 측정시간

    @NotNull
    private float temp; // 온도

    @NotNull
    private float humidity; // 습도

    @NotNull
    private float soil; // 토양습도
}
