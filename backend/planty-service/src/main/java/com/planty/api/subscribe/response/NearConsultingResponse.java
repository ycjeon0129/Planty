package com.planty.api.subscribe.response;

import lombok.*;

@Getter
@Setter
@Builder
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class NearConsultingResponse {

    private Long cid;   // 컨설팅 예약 식별키

    private String date;    // 예약 날짜

    private Boolean cancel; // 취소여부. 취소(1), 미취소(0)

    private Boolean active; // 실행여부. 실행(1), 미실행(0)

    private Integer time;   // 시간 식별키

}
