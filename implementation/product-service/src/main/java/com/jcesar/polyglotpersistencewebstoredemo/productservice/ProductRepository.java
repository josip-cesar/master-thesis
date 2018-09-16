package com.jcesar.polyglotpersistencewebstoredemo.productservice;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProductRepository extends MongoRepository<Product, String> {
	
	public List<Product> findByName(String name);
	public List<Product> findByKeywordsIn(List<String> keywords);
	public List<Product> findByPriceBetween(Double startPrice, Double endPrice);

}
