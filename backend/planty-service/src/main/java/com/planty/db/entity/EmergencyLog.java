package com.planty.db.entity;

import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import javax.persistence.*;
import java.io.Serializable;

@ToString
@Getter
@Setter
@Builder
@AllArgsConstructor
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

    @NotFound(action = NotFoundAction.IGNORE)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(referencedColumnName = "gid", name = "GM_INFO_gid") // GM 식별키
    private GmInfo gid;

    @Column(name = "name") // 식물 이름
    private String name;

    @Column(name = "type") // 상담 유형. 화상(0), 채팅(1)
    private Integer type;

    @Column(name = "content") // 상담 내용
    private String content;

    @Column(name = "start_time") // 실제 시작 시간
    private String startTime;

    @Column(name = "end_time") // 실제 종료 시간
    private String endTime;

    @Column(name = "connection", length = 512) // OpenVidu Session Token
    private String connection;

}
