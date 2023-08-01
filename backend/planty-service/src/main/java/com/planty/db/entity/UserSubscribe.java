package com.planty.db.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Table(name = "user_subscribe")
@NoArgsConstructor
public class UserSubscribe {
    @Id
    private int idx;
}
