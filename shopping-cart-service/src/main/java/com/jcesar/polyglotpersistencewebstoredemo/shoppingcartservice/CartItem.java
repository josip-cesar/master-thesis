package com.jcesar.polyglotpersistencewebstoredemo.shoppingcartservice;

public class CartItem {
	String productId;
	Integer quantity;
	
	public CartItem() {
		super();
	}

	public String getProductId() {
		return productId;
	}

	public void setProductId(String productId) {
		this.productId = productId;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}


}
