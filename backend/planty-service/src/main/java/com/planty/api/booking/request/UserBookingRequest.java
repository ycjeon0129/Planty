package com.planty.api.booking.request;

import lombok.*;

import javax.validation.constraints.NotNull;

@NoArgsConstructor
@Data
@AllArgsConstructor
@Builder
@ToString
public class UserBookingRequest {
    @NotNull
    private Long sid;
    @NotNull
    private String date;
    @NotNull
    private Integer timeId;
}
