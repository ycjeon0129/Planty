package com.planty.api.gm.consulting.request;

import lombok.*;

@Getter
@Setter
@Builder
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class GmConsultingRecordRequest {

    private Long cid;
    private String recommendedStartDate;
    private String recommendedEndDate;
    private String content;

}
