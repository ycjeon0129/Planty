package com.planty.api.gm.emergency.request;

import lombok.*;

@Getter
@Setter
@Builder
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class GmEmergencyRecordRequest {

    private Long eid;
    private String name;
    private String content;

}
