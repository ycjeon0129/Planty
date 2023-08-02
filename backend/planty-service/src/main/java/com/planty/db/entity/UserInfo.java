package com.planty.db.entity;

import com.planty.db.entity.common.UserTimeEntity;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;
import org.springframework.data.annotation.CreatedDate;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

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
public class UserInfo extends UserTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // MySQL의 AUTO_INCREMENT를 사용
    @Column(name = "uid")
    private Integer uid;

//    @Column(unique = true, nullable = false)
//    private String oAuth2Id;

    @Column(name = "nickname", length = 16, nullable = false)
    private String nickname;

    @Column(name = "email", length = 64, unique = true, nullable = false)
    private String email;

    @Column(name = "auth", length = 1024, nullable = true)
    private String auth;

    @Column(name = "photo", length = 256, nullable = true)
    private String photo;

//    @Column(name = "join_time")
////    @CreationTimestamp
//    @CreatedDate
//    private String joinTime;

    @Column(name = "emergency_count")
    @ColumnDefault("1")
    private Integer emergencyCount;

    @Column(name = "shipping_address", length = 256, nullable = true)
    private String shippingAddress;

    /* 회원정보 수정을 위한 set method*/
    public void modify(String nickname) {
        this.nickname = nickname;
    }

    /* 소셜로그인시 이미 등록된 회원이라면 수정날짜만 업데이트하고
     * 기존 데이터는 그대로 보존하도록 예외처리 */
    public UserInfo updateModifiedDate() {
        this.onPreUpdate();
        return this;
    }


//    @Transient -> @Column과 반대로 테이블에 컬럼으로 생성되지 않는 필드의 경우엔 @Transient 어노테이션을 적용
}
