package com.jcesar.polyglotpersistencewebstore.userservice.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.CONFLICT)
public class WrongCredentials extends RuntimeException {

	private static final long serialVersionUID = 4947836644847938337L;

}
