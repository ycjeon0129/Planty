package com.planty.db.repository;

import com.planty.db.entity.SubscribeProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface SubscribeProductRepository extends JpaRepository<SubscribeProduct, Long> {
    Optional<SubscribeProduct> findBySpid(Long spid);

}

