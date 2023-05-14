package com.emart.services;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.emart.entities.CartItem;
import com.emart.repository.CartItemRepository;
@Service
public class CartItemManagerImpl implements CartItemManager{

	@Autowired
	CartItemRepository repository;


	@Override
	public void addCartItem(CartItem p) {
		repository.save(p);

	}

	@Override
	public List<CartItem> getCartItems() {
		return repository.findAll();

	}

	@Override
	public void delete(int id) {
		repository.deleteById(id);
		
	}

	@Override
	public void update(CartItem cartitem, int id) {
		repository.update(cartitem.getQuantity(),id);//changes

	}

	@Override
	public Optional<CartItem> getCartItem(int id) {
		// TODO Auto-generated method stub
		return repository.findById(id);

	}

}
