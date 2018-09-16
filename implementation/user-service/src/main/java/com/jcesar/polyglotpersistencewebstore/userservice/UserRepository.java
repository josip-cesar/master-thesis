package com.jcesar.polyglotpersistencewebstore.userservice;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {
	User findByEmail(String email);
	List<User> findByFirstName(String firstName);
	List<User> findByLastName(String firstName);
}
