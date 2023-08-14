package com.planty.db.entity;

import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.io.Serializable;


//@Builder
@ToString
@Getter
@Builder
@AllArgsConstructor
@DynamicInsert // Apply changed fields only
@DynamicUpdate // Apply changed fields only
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table (name = "consulting_log")
@Entity
public class ConsultingLog implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idx", nullable = false)
    private Long idx;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(referencedColumnName = "cid", name = "cid") // 컨설팅 예약 식별기(외래키)
    private ConsultingBooking cid;


    @Column(name = "RECOMMENDED_START_DATE") // 권장 상담 시작일
    private String recommendedStartDate;

    @Column(name = "RECOMMENDED_END_DATE") // 권장 상담 종료일
    private String recommendedEndDate;

    @Column(name = "times") // 컨설팅 회차
    private Integer times;

    @Column(name = "content") // 상담 내용
    private String content;

    @Column(name = "start_time") // 실제 시작 시간
    private String startTime;

    @Column(name = "end_time") // 실제 종료 시간
    private String endTime;
}
