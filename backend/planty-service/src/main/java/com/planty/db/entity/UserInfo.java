package com.planty.db.entity;

import com.planty.common.enums.Role;
import com.planty.common.enums.UserType;
import com.planty.db.entity.common.BaseEntity;
import javax.persistence.*;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;

@Getter
@Setter
@Builder
@ToString
@AllArgsConstructor
@NoArgsConstructor
@DynamicInsert
@Table(name = "user_info")
@Entity
public class UserInfo extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // MySQL의 AUTO_INCREMENT를 사용
    @Column(name = "uid")
    private Long uid;

    @Column(name = "user_id", length = 32, nullable = false)
    private String userId;

    @Column(name = "user_name", length = 32, nullable = false)
    private String userName;

    @Column(name = "password", length = 128, nullable = false)
    private String password;

    @Column(name = "email", length = 64, unique = true, nullable = false)
    private String userEmail;

    @Column(name = "token", length = 1024, nullable = true)
    private String token;

    @Column(name = "photo", length = 256, nullable = true)
    private String photo;

    @Column(name = "emergency_count")
    @ColumnDefault("1")
    private Integer emergencyCount;

    @Column(name = "shipping_address", length = 256, nullable = true)
    private String shippingAddress;

    @Column(name = "user_type", length = 32, nullable = true)
    private String userType;

    @Column(name = "role", length = 256, nullable = true)
    private String role;

    // ENUM으로 안하고 ,로 해서 구분해서 ROLE을 입력 -> 그걸 파싱!!
    public List<String> getRoleList(){
        if(this.role.length() > 0){
            return Arrays.asList(this.role.split(","));
        }
        return new ArrayList<>();
    }

//    @Builder(builderClassName = "OAuth2Register", builderMethodName = "oauth2Register")
//    public UserInfo(String username, String password, String email, String role, String provider, String providerId) {
//        this.userName = username;
//        this.password = password;
//        this.userEmail = email;
//        this.role = role;
//        this.userType = provider;
//        this.userId = providerId;
//    }

//    public UserInfo update(OAuth2UserInfo oAuth2UserInfo) {
//        this.nickname = oAuth2UserInfo.getNickname();
//        this.auth = oAuth2UserInfo.getOAuth2Id();
//
//        return this;
//    }

//    /* 회원정보 수정을 위한 set method*/
//    public void modify(String nickname) {
//        this.nickname = nickname;
//    }
//
//    /* 소셜로그인시 이미 등록된 회원이라면 수정날짜만 업데이트하고
//     * 기존 데이터는 그대로 보존하도록 예외처리 */
//    public UserInfo updateModifiedDate() {
//        this.onPreUpdate();
//        return this;
//    }


//    @Transient -> @Column과 반대로 테이블에 컬럼으로 생성되지 않는 필드의 경우엔 @Transient 어노테이션을 적용
}
