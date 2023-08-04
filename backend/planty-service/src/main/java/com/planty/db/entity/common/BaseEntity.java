package com.planty.db.entity.common;

/**
 * 모델 간 공통 사항 정의.
 */
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;

@MappedSuperclass
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class BaseEntity {
    @CreatedDate
    private LocalDateTime joinDate;

    @LastModifiedDate
    private LocalDateTime modifiedDate;
}