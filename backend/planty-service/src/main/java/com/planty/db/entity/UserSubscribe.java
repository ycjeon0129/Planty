package com.planty.db.entity;

import javax.persistence.*;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;

@ToString
@Getter
@Setter
@Builder
@AllArgsConstructor
@RequiredArgsConstructor
@NoArgsConstructor
@DynamicInsert
@DynamicUpdate
@Table(name = "user_subscribe")
@Entity
public class UserSubscribe{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "sid", nullable = false) // 식별키
    private Long sid;

    @Column(name ="arduino_id", unique = true) // 아두이노 id
    private Integer arduinoId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(referencedColumnName = "uid", name = "USER_INFO_uid") // 사용자 식별키
    private UserInfo uid;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(referencedColumnName = "spid", name = "SUBSCRIBE_PRODUCT_spid") // 구독상품 식별키
    private SubscribeProduct spid;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(referencedColumnName = "gid", name = "GM_INFO_gid") // GM 식별키
    private GMInfo gid;

    @NonNull
    @Column(name = "consulting_remain_cnt", nullable = false) // 남은 컨설팅 횟수
    @ColumnDefault("0")
    private Integer consultingRemainCnt;

    @Column(name = "start_date") // 구독 시작일
    @CreationTimestamp
    private LocalDate startDate;

    @Column(name = "end_date", nullable = true) // 구독 종료일
    private LocalDate endDate;

}
