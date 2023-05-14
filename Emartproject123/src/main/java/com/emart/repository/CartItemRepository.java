package com.emart.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.emart.entities.CartItem;

@Repository
@Transactional
public interface CartItemRepository extends JpaRepository<CartItem,Integer> 
{
	@Modifying
	@Query("update CartItem p set p.quantity=:quantity where p.cart_Item_Id = :id")//changes
	void update(@Param("quantity")int quantity,@Param("id")int id);//changes
	
	
}

