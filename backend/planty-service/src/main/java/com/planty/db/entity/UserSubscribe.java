package com.planty.db.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

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
public class UserSubscribe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "sid", nullable = false) // 식별키
    private Long sid;

    @NonNull
    @Column(name ="arduino_id", length = 128, unique = true, nullable = false) // 이름
    private Integer arduinoId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(referencedColumnName = "uid", name = "USER_INFO_uid")
    private User uId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(referencedColumnName = "spid", name = "SUBSCRIBE_PRODUCT_spid")
    private SubscribeProduct subscribeProductSpid;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(referencedColumnName = "gid", name = "GM_INFO_gid")
    private GmInfo GMInfoGid;

    @NonNull
    @Column(name = "consulting_remain_cnt", length = 128, nullable = false)
    @ColumnDefault("0")
    private Integer consultingRemainCnt;

    @Column(name = "start_date")
    @CreationTimestamp
    private LocalDate startDate;

}
