package com.planty.db.entity;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
@ToString
@Getter
@Setter
@Builder
@AllArgsConstructor
@RequiredArgsConstructor
@Table(name = "view_user_subscribe")
@Entity
public class ViewUserEmergency{
    @Id
    @Column(name = "eid", nullable = false) //  // 응급실 이용 내역 식별키
    private Long eid;

    @Column(name = "type")// 상담 유형. 화상(0), 채팅(1)
    private Boolean type;

    @Column(name = "name")
    private String name; // 식물 이름

    @Column(name = "start_date")  // 실제 시작 시간
    private String startDate;

    @Column(name = "end_date")  // 실제 종료 시간
    private String endDate;

    @Column(name = "advice") // 상담 내용
    private String advice;

    @Column(name = "greenmate") // Gm 닉네임
    private String greenmate;

    @Column(name = "user") // user name
    private String user;
}