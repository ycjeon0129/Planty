package com.planty.db.entity;

import javax.persistence.*;
import lombok.*;
@ToString
@Getter
@Setter
@Builder
@AllArgsConstructor
@RequiredArgsConstructor
@NoArgsConstructor
@Table(name = "view_user_consulting")
@Entity
public class ViewUserConsulting {
    @Id
    @Column(name = "cid", nullable = false) // 컨설팅 예약 식별키
    private Long cid;

    @NonNull
    @Column(name = "uid")  // 사용자 식별키
    private Long uid;

    @NonNull
    @Column(name = "sid")  // 사용자 구독정보 식별키
    private Long sid;

//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(referencedColumnName = "spid", name = "spid")
    @NonNull
    @Column(name = "spid")  // 구독 상품 식별키
    private Long spid;

    @NonNull
    @Column(name = "gid") // Gm nickname
    private Long gid;

    @NonNull
    @Column(name = "gm_name") // Gm nickname
    private String gmName;

    @NonNull
    @Column(name = "time") // 시간 식별기
    private Integer time;

    @NonNull
    @Column(name = "date") // 예약 날짜
    private String date;

    @NonNull
    @Column(name = "cancel") // 취소여부. 취소(1), 미취소(0)
    private Boolean cancel;

    @NonNull
    @Column(name = "active") // 실행여부. 실행(1), 미실행(0)
    private Boolean active;

    @NonNull
    @Column(name = "name") // 구독 상품명
    private String name;

    @Column(name = "RECOMMENDED_START_DATE") // 권장 상담 시작일
    private String recommendedStartDate;

    @Column(name = "RECOMMENDED_END_DATE") // 권장 상담 종료일
    private String recommendedEndDate;

    @Column(name = "content") // 상담 내용
    private String content;

    @Column(name = "start_time") // 실제 시작 시간
    private String startTime;

    @Column(name = "end_time") // 실제 종료 시간
    private String endTime;

}
