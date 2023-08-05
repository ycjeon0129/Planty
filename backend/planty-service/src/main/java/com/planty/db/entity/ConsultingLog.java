package com.planty.db.entity;

import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.io.Serializable;


//@Builder
@ToString
@Getter
@DynamicInsert // Apply changed fields only
@DynamicUpdate // Apply changed fields only
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table (name = "consulting_log")
@Entity
public class ConsultingLog implements Serializable {
    @Id
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(referencedColumnName = "cid", name = "cid") // 컨설팅 예약 식별기(외래키)
    private ConsultingBooking cid;

    @NonNull
    @Column(name = "RECOMMENDED_START_DATE") // 권장 상담 시작일
    private String recommendedStartDate;

    @NonNull
    @Column(name = "RECOMMENDED_END_DATE") // 권장 상담 종료일
    private String recommendedEndDate;

    @NonNull
    @Column(name = "times") // 컨설팅 회차
    private Integer times;

    @Column(name = "content") // 상담 내용
    private String content;

    @NonNull
    @Column(name = "start_time") // 실제 시작 시간
    private String startTime;

    @NonNull
    @Column(name = "end_time") // 실제 종료 시간
    private String endTime;

    @Builder
    public ConsultingLog(ConsultingBooking cid, String recommendedStartDate, String recommendedEndDate,
                         Integer times, String content, String startTime, String endTime) {
        this.cid = cid;
        this.recommendedStartDate = recommendedStartDate;
        this.recommendedEndDate = recommendedEndDate;
        this.times = times;
        this.content = content;
        this.startTime = startTime;
        this.endTime = endTime;
    }
}
