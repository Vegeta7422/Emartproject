package com.emart.services;

import java.util.List;
import java.util.Optional;

import com.emart.entities.Customer;

public interface CustomerManager 
{
	void addCustomer(Customer c);
	List<Customer> getCustomers();
	void delete(int customer_Id);
	void updateWallet(int customer_Id, int wallet);
	Optional<Customer> getCustomer(int customer_Id);
	Optional<Object> getCustomer(String username);

}