package com.planty.db.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;

import java.time.LocalDateTime;

@ToString
@Getter
//
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@DynamicInsert
@Table(name = "user_info")
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // MySQL의 AUTO_INCREMENT를 사용
    @Column(name = "uid")
    private Long uid;

    @Column(name = "nickname", length = 16, nullable = false)
    private String nickname;

    @Column(name = "auth", length = 1024, nullable = true)
    private String auth;

    @Column(name = "photo", length = 256, nullable = true)
    private String photo;

    @Column(name = "join_time")
    @CreationTimestamp
    private LocalDateTime joinTime;

    @Column(name = "emergency_count")
    @ColumnDefault("1")
    private Integer emergencyCount;

    @Column(name = "shipping_address", length = 256, nullable = true)
    private String shippingAddress;









//    @Transient -> @Column과 반대로 테이블에 컬럼으로 생성되지 않는 필드의 경우엔 @Transient 어노테이션을 적용
}
