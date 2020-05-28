package com.careerframework.rest.webservices.restfulwebservices;

public class CareerFrameworkBean {
	
	private String message;

	public  CareerFrameworkBean(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return "CareerFrameworkBean [message=" + message + "]";
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

}
