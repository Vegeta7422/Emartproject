package com.emart.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.emart.entities.Category;
import com.emart.entities.Configuration;
import com.emart.entities.ProductDetails;
import com.emart.services.ConfigurationManager;
import com.emart.services.ProductDetailsManager;

@RestController  
@CrossOrigin("http://localhost:3000")
public class ProductDetailsController
{
	@Autowired
	ProductDetailsManager manager;
	
	
	@GetMapping(value = "api/productdetails")
	 public List<ProductDetails> showProductDetails()
	 {
		  return manager.getProductDetails();
		
	}
	
	@GetMapping(value = "api/productDetailsById/{productDetail_Id}")
	 public Optional<ProductDetails> getProductDetail(@PathVariable int productDetail_Id)
	 {
		Optional<ProductDetails> p=manager.getProductDetail(productDetail_Id);
		return p;
	 }

	 @GetMapping(value = "api/productdetails/{p_Id}")
	 public List<ProductDetails> getDetails(@PathVariable int p_Id)
	 {
		return manager.getDetails(p_Id);
	 }
	

	 @DeleteMapping(value = "api/productdetails/{cid}")
	 public void delete(@PathVariable int cid)
	 {
		manager.delete(cid);
	 }

	 @PostMapping(value = "api/productdetails")
	 public void getProductDetails(@RequestBody ProductDetails prod)
	 {
		System.out.println("addproductDetails called");
		manager.addProductDetails(prod);
	 }
}


