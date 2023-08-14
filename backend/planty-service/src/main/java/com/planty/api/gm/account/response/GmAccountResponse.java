package com.planty.api.gm.account.response;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

import javax.validation.constraints.NotNull;
@Getter
@Builder
@ToString
public class GmAccountResponse {
    @NotNull
    private Boolean active; // 'GM 활성화 상태. 활성화(1), 비활성화(0)',
}