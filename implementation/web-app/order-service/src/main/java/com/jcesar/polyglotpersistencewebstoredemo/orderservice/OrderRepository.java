package com.jcesar.polyglotpersistencewebstoredemo.orderservice;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface OrderRepository extends CrudRepository<Order, Integer> {
	
	List<Order> findByCustomerId(Integer customerId);

}
