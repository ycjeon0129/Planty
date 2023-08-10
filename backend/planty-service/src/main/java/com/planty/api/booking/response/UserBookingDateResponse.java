package com.planty.api.booking.response;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

import javax.validation.constraints.NotNull;

@Getter
@Builder
@ToString
public class UserBookingDateResponse {
    @NotNull
    private Boolean time; // 시간 식별키 -> 활성화(1), 비활성화(0)
}
