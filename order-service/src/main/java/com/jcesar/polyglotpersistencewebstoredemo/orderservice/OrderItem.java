package com.jcesar.polyglotpersistencewebstoredemo.orderservice;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class OrderItem {

	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	Integer id;
	String productCatalogItemId;
	Double price;
	Integer quantity;
	
	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id", nullable = false)
    private Order order;
	
	
	
	public OrderItem() {
		super();
	}



	public Integer getId() {
		return id;
	}



	public void setId(Integer id) {
		this.id = id;
	}



	public String getProductCatalogItemId() {
		return productCatalogItemId;
	}



	public void setProductCatalogItemId(String productCatalogItemId) {
		this.productCatalogItemId = productCatalogItemId;
	}



	public Double getPrice() {
		return price;
	}



	public void setPrice(Double price) {
		this.price = price;
	}



	public Integer getQuantity() {
		return quantity;
	}



	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}



	public Order getOrder() {
		return order;
	}



	public void setOrder(Order order) {
		this.order = order;
	}




	
	
}
