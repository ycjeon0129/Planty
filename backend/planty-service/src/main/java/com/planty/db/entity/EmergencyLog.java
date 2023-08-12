package com.planty.db.entity;

import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.io.Serializable;

@ToString
@Getter
@DynamicInsert // Apply changed fields only
@DynamicUpdate // Apply changed fields only
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table (name = "emergency_log")
@Entity
public class EmergencyLog implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // 응급실 이용 내역 식별키
    private Long eid;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(referencedColumnName = "uid", name = "USER_INFO_uid") // 사용자 식별키
    private UserInfo uid;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(referencedColumnName = "gid", name = "GM_INFO_gid") // GM 식별키
    private GmInfo gid;

    @Column(name = "name") // 식물 이름
    private String name;

    @Column(name = "type") // 상담 유형. 화상(0), 채팅(1)
    private Integer type;

    @Column(name = "content") // 상담 내용
    private String content;

    @NonNull
    @Column(name = "start_time") // 실제 시작 시간
    private String startTime;

    @NonNull
    @Column(name = "end_time") // 실제 종료 시간
    private String endTime;

    @Builder
    public EmergencyLog(Long eid, UserInfo uid, GmInfo gid, String name, Integer type, String content,
                        String startTime, String endTime) {
        this.eid = eid;
        this.uid = uid;
        this.gid = gid;
        this.name = name;
        this.type = type;
        this.content = content;
        this.startTime = startTime;
        this.endTime = endTime;
    }
}
