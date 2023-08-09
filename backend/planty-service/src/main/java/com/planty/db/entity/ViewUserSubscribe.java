package com.planty.db.entity;

import javax.persistence.*;
import lombok.*;

import java.io.Serializable;

@ToString
@Getter
@Setter
@Builder
@AllArgsConstructor
@RequiredArgsConstructor
@Table(name = "view_user_subscribe")
@Entity
public class ViewUserSubscribe{
    @Id
    @Column(name = "sid", nullable = false) // 사용자 구독정보 식별키
    private Long sid;

    @Column(name = "uid") // 사용자 식별키
    private Long uid;

//    @OneToOne(fetch = FetchType.LAZY)
//    @JoinColumn(referencedColumnName = "arduino_id", name = "arduino_id") // 아두이노 id
    @Column(name = "arduino_id")
    private Integer arduinoId; //아두이노 id

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

    @Column(name = "cb_date") // 예약 날짜
    private String cbDate;

    @Column(name = "cancel") // 취소여부. 취소(1), 미취소(0)
    private Boolean cbCancel;

    @Column(name = "active") // 실행여부. 실행(1), 미실행(0)
    private Boolean cbActive;

    @Column(name = "cb_time") // 시간 식별키
    private Integer cbTime;

}
