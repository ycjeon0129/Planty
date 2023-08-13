package com.planty.api.embedded.repuest;

import com.planty.db.entity.UserSubscribe;
import lombok.*;

import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;
@NoArgsConstructor
@Data
@AllArgsConstructor
@Builder
@ToString
public class EmbeddedRequest {
    @NotNull
    private Long sid; // 사용자 구독정보 식별키
    @NotNull
    private float temp; // 온도
    @NotNull
    private float humidity; // 습도
    @NotNull
    private float soil; // 토양습도
}
