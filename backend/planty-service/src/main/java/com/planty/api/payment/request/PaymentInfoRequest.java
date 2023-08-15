package com.planty.api.payment.request;

import lombok.*;

@Getter
@Setter
@Builder
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class PaymentInfoRequest {

    private int type;    // 결제 타입. 구독(0), 응급실 이용권(1)

    private Long idx;    // 결제 상품 인덱스

}
