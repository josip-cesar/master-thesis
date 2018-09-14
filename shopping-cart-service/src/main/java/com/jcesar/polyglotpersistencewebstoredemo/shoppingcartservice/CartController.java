package com.jcesar.polyglotpersistencewebstoredemo.shoppingcartservice;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CartController {

	@Autowired
	private CartRepository cartRepository;
	
	@GetMapping("cart-service/retriveUsersCart/{userId}")
	public @ResponseBody List<CartItem> retriveUsersCart(@PathVariable Integer userId) {
		Cart cart = cartRepository.findByUserId(userId);
		if (cart != null && cart.getCartItems() != null) {
			return cart.getCartItems();
		} else {
			return new ArrayList<>();
		}
	}

	@PostMapping("cart-service/saveCart")
	public void saveCart(@RequestBody Cart cart) {
		Cart usersCart = cartRepository.findByUserId(cart.getUserId());
		if (usersCart != null) {
			usersCart.setCartItems(cart.getCartItems());
			cartRepository.save(usersCart);
		} else {
			cartRepository.save(cart);
		}
	}
}
