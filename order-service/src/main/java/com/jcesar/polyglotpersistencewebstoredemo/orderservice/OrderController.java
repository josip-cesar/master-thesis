package com.jcesar.polyglotpersistencewebstoredemo.orderservice;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OrderController {
	
	@Autowired
	private OrderRepository orderRepository;
	
	@PostMapping("order-service/create")
	public void createNewOrder(@RequestBody Order order) {
		order.setCreatedOn(new Date());
		order.getPaymentDetails().setOrder(order);
		order.getShippingDetails().setOrder(order);
		order.getOrderItems().forEach(item -> {item.setOrder(order);});
		
		System.out.println("New order: ");
//		System.out.println(order.toString());
		
		orderRepository.save(order);
	}
	
	@GetMapping("order-service/orders")
	public @ResponseBody Iterable<Order> getAllOrders() {
		return orderRepository.findAll();
	}
	
	@GetMapping("order-service/orders/{id}")
	public @ResponseBody Order findOrderById(@PathVariable Integer id) {
		Optional<Order> order = orderRepository.findById(id);
		if (!order.isPresent()) {
			throw new OrderNotFoundException("orderId-" + id);
		}
		return order.get();
	}
	
	@GetMapping("order-service/orders/findByCustomerId/{customerId}")
	public @ResponseBody List<Order> findByCustomerId(@PathVariable Integer customerId) {
		 return orderRepository.findByCustomerId(customerId);
	}
}
