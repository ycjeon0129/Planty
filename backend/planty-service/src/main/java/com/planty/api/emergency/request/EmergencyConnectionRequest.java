package com.planty.api.emergency.request;

import lombok.*;

@Getter
@Setter
@Builder
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class EmergencyConnectionRequest {

    Long eid;
    String sessionId;

}
