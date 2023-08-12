package com.planty.api.subscribe.request;

import lombok.*;

import javax.validation.constraints.NotNull;
@NoArgsConstructor
@Data
@AllArgsConstructor
@Builder
@ToString
public class UserSubscribeRequest {

    @NotNull
    private Long spid;

}