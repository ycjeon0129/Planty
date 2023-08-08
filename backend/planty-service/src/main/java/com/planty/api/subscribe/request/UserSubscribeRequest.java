package com.planty.api.subscribe.request;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

import javax.validation.constraints.NotNull;
@Getter
@Builder
@ToString
public class UserSubscribeRequest {

    @NotNull
    private Long spid;

}