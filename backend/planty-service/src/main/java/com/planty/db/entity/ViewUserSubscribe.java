package com.planty.db.entity;

import javax.persistence.*;
import lombok.*;

@ToString
@Getter
@Setter
@Builder
@AllArgsConstructor
@RequiredArgsConstructor
@Table(name = "view_user_subscribe")
@Entity
public class ViewUserSubscribe {
    @Id
    @Column(name = "sid", nullable = false) // 사용자 구독정보 식별키
    private Integer sid;

    @Column(name = "uid") // 사용자 식별키
    private Integer uid;

    @Column(name = "arduino_id") // 아두이노 id
    private Integer arduinoId;

    @Column(name = "consulting_remain_cnt") // 남은 컨설팅 횟수
    private Integer consultingRemainCnt;

    @Column(name = "start_date") // 구독 시작일
    private String startDate;

    @Column(name = "end_date") // 구독 종료일
    private String endDate;

    @Column(name = "sp_name") // 구독 상품명
    private String spName;

    @Column(name = "period") // 구독 상품 기간
    private Integer period;

    @Column(name = "consulting_cnt") // 구독 상품 컨설팅 횟수
    private Integer consultingCnt;

    @Column(name = "description") // 구독 상품 상세설명
    private String description;

    @Column(name = "pi_name") // 식물 이름
    private String piName;

    @Column(name = "tonic_period") //식물 영양제 제공 주기 (주)
    private Integer tonicPeriod;

    @Column(name = "nickname") // Gm 닉네임
    private String GMNickname;
}
