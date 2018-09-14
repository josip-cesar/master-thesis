package com.jcesar.polyglotpersistencewebstore.userservice.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class UserNotFoundException extends RuntimeException {

	private static final long serialVersionUID = 7784116772362402192L;

	public UserNotFoundException(String arg0) {
		super(arg0);
	}
	
	

}
