package com.planty.api.emergency.response;

import lombok.*;

@Getter
@Setter
@Builder
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class EmergencySessionResponse {

    Long eid;
    String sessionId;

}
