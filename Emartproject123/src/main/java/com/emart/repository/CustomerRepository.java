package com.emart.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.emart.entities.Customer;

@Repository
@Transactional
public interface CustomerRepository extends JpaRepository<Customer,Integer> 
{
	@Modifying
	@Query("update Customer c set c.wallet = :wallet where c.customer_Id = :customer_Id")
	void updateWallet(@Param("wallet") int wallet, @Param("customer_Id") int customer_Id);
	
	@Query("from Customer c join Cart cr on c.customer_Id=cr.customer where username=:user")
	Optional<Object> getByUserName(@Param("user") String user);
}