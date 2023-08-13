package com.planty.db.entity;

import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;
@ToString
@Getter
@Setter
@Builder
@AllArgsConstructor
@RequiredArgsConstructor
@NoArgsConstructor
@DynamicInsert
@Table(name = "ticket_product")
@Entity
public class TicketProduct {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tpid", nullable = false)
    private Long tpid; // 응급실 이용권 묶음상품 식별키

    @NonNull
    @Column(name ="name", length = 32)
    private String name; // 상품 이름

    @NonNull
    @Column(name ="count")
    private Integer count; // 이용권 개수

    @NonNull
    @Column(name = "price")
    private Integer price; // 가격

}