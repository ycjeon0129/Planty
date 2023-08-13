package com.planty.api.emergency.response;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;
@Getter
@Builder
@ToString
public class ConnectionCountResponse {

    private Long gmCnt;      // 활성화된 그린메이트 수

}