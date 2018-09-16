package com.jcesar.polyglotpersistencewebstoredemo.orderservice;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class OrderNotFoundException extends RuntimeException {

	
	private static final long serialVersionUID = -3680292125766207262L;
	
	public OrderNotFoundException(String arg0) {
		super(arg0);
	}

}
