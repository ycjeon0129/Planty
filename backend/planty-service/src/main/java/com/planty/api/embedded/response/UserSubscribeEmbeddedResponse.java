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
    private String date;

    @NotNull
    private float temp;

    @NotNull
    private float humidity;

    @NotNull
    private float soil;
}
