package com.jcesar.polyglotpersistencewebstore.userservice.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class DuplicateEmail extends RuntimeException {

	private static final long serialVersionUID = -2802672052191693410L;

}
