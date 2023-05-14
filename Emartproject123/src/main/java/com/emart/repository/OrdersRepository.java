package com.emart.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.emart.entities.Orders;



@Repository
@Transactional
public interface OrdersRepository extends JpaRepository<Orders,Integer> {
	

}

