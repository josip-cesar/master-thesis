package com.jcesar.polyglotpersistencewebstoredemo.shoppingcartservice;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface CartRepository extends MongoRepository<Cart, String> {
	
	Cart findByUserId(int userId);

}
