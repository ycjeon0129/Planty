package com.planty.db.repository;

import com.planty.db.entity.TicketProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@Repository
public interface TicketProductRepository extends JpaRepository<TicketProduct, Long> {
    List<TicketProduct> findAll();
    Optional<TicketProduct> findByTpid(Long tpid);
}