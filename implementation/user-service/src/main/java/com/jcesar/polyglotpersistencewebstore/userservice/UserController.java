package com.jcesar.polyglotpersistencewebstore.userservice;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.jcesar.polyglotpersistencewebstore.userservice.exceptions.DuplicateEmail;
import com.jcesar.polyglotpersistencewebstore.userservice.exceptions.UserNotFoundException;
import com.jcesar.polyglotpersistencewebstore.userservice.exceptions.WrongCredentials;

@RestController
public class UserController {
	
	@Autowired
	private UserRepository userRepository;
	@GetMapping("user-service/users")
	public @ResponseBody Iterable<User> getAllUsers() {
		return userRepository.findAll();
	}
	
	@GetMapping("user-service/users/{id}")
	public @ResponseBody User findUserById(@PathVariable int id) {
		Optional<User> user = userRepository.findById(id);
		if (!user.isPresent()) {
			throw new UserNotFoundException("userId-" + id);
		}
		return user.get();
	}
	
	@PostMapping("user-service/register")
	public void createNewUser(@RequestBody User user) {
		if (userRepository.findByEmail(user.getEmail()) == null) {
			userRepository.save(user);
		} else {
			throw new DuplicateEmail();
		}
	}
	
	@GetMapping("/user-service/login/{email}/{password}")
	public @ResponseBody User authenticateUser(@PathVariable String email, @PathVariable String password) {
		User user = userRepository.findByEmail(email);
		if (user != null) {
			if (user.getPassword().equals(password)) {
				return user;
			} else {
				throw new WrongCredentials();
			}
		} else {
			throw new WrongCredentials();
		}
	}
	
	@PostMapping("user-service/update")
	public void updateUser(@RequestBody User user) {
		userRepository.save(user);
	}
}
