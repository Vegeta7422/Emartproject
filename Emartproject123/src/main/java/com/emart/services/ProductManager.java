package com.emart.services;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.query.Param;

import com.emart.entities.Category;
import com.emart.entities.Product;

public interface ProductManager
{
	void addProduct(Product p);
	List<Product> getProducts();
	void delete(int id);
	Optional<Product> getProduct(int id);
	List<Product> getProductByCat(int cat_Id);
	List<Product> getProductsBySearch(String search );
	List<Product> getProductsByPromotion();
	
}
