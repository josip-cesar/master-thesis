package com.jcesar.polyglotpersistencewebstoredemo.productservice;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class ProductNotFoundException extends RuntimeException {

	private static final long serialVersionUID = 7784116772362402192L;

	public ProductNotFoundException(String arg0) {
		super(arg0);
	}
	
	

}
