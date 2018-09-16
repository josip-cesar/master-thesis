package com.jcesar.polyglotpersistencewebstoredemo.orderservice;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "orders")
public class Order {
	@Id
	@Column(name = "order_id")
    @GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	private Integer customerId;
	private Date createdOn;
	private Double totalPrice;
	
	@OneToMany(cascade = CascadeType.ALL,
            fetch = FetchType.LAZY,
            mappedBy = "order")
	private List<OrderItem> orderItems;
	
	@OneToOne(mappedBy = "order", cascade = CascadeType.ALL, 
            fetch = FetchType.LAZY, optional = false)
	private PaymentDetails paymentDetails;
	
	@OneToOne(mappedBy = "order", cascade = CascadeType.ALL, 
            fetch = FetchType.LAZY, optional = false)
	private ShippingDetails shippingDetails;
	
	
	public Order() {
		super();
	}


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public Integer getCustomerId() {
		return customerId;
	}


	public void setCustomerId(Integer customerId) {
		this.customerId = customerId;
	}


	public Date getCreatedOn() {
		return createdOn;
	}


	public void setCreatedOn(Date createdOn) {
		this.createdOn = createdOn;
	}


	public Double getTotalPrice() {
		return totalPrice;
	}


	public void setTotalPrice(Double totalPrice) {
		this.totalPrice = totalPrice;
	}


	public List<OrderItem> getOrderItems() {
		return orderItems;
	}


	public void setOrderItems(List<OrderItem> orderItems) {
		this.orderItems = orderItems;
	}


	public PaymentDetails getPaymentDetails() {
		return paymentDetails;
	}


	public void setPaymentDetails(PaymentDetails paymentDetails) {
		this.paymentDetails = paymentDetails;
	}


	public ShippingDetails getShippingDetails() {
		return shippingDetails;
	}


	public void setShippingDetails(ShippingDetails shippingDetails) {
		this.shippingDetails = shippingDetails;
	}


	@Override
	public String toString() {
		return "Order [id=" + id + ", customerId=" + customerId + ", createdOn=" + createdOn + ", totalPrice="
				+ totalPrice + ", orderItems=" + orderItems + ", paymentDetails=" + paymentDetails
				+ ", shippingDetails=" + shippingDetails + "]";
	}

}
