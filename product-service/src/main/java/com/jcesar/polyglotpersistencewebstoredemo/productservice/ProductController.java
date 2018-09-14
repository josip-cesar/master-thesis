package com.jcesar.polyglotpersistencewebstoredemo.productservice;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductController {
	
	@Autowired
	private ProductRepository productRepository;
	
	@GetMapping("product-service/productList")
	public @ResponseBody List<Product> getAllProudcts() {
		return productRepository.findAll();
	}
	
	@GetMapping("product-service/product/{id}")
	public Product getProductById(@PathVariable String id) {
		Optional<Product> product = productRepository.findById(id);
		if (product.isPresent()) {
			return product.get();
		} else {
			throw new ProductNotFoundException("product ID: " + id);
		}
	}
	
	@GetMapping("product-service/products/findByKeywordsIn/{keywords}")
	public List<Product> findByKeywordsIn(@PathVariable String[] keywords) {
		return productRepository.findByKeywordsIn(Arrays.asList(keywords));
	}
	
	@GetMapping("product-service/products/findByName/{name}")
	public List<Product> findByKeywordsIn(@PathVariable String name) {
		return productRepository.findByName(name);
	}
	
	@GetMapping("product-service/products/findByIds/{productIds}")
	public @ResponseBody List<Product> findAllProductsById(@PathVariable String[] productIds) {
		List<Product> result = new ArrayList<>();
		if (productIds != null && productIds.length > 0) {
			productRepository.findAllById(Arrays.asList(productIds)).forEach(result::add);
		}
		return result;
	}
	
	@PostMapping("product-service/saveProduct")
	public void saveProudct(@RequestBody Product product) {
		productRepository.save(product);
	}
	
	@DeleteMapping("product-service/deleteProduct/{id}")
	public void deleteProduct(@PathVariable String id) {
		productRepository.deleteById(id);
	}
	

}
