package com.project.sgda.exception;

public class EmailAlreadyRegitredException extends RuntimeException{

	private static final long serialVersionUID = 1L;

	public EmailAlreadyRegitredException(String message) {
		super(message);

	}
}
