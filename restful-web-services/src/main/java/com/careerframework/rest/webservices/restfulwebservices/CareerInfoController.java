package com.careerframework.rest.webservices.restfulwebservices;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class CareerInfoController {
	
	List<String> careerInfoList = new ArrayList<String>();
	
	@GetMapping(path="/getcareerinfo")
	public List getCareerInfo() {
		careerInfoList = new ArrayList<String>();
		careerInfoList.add("business results");
		careerInfoList.add("individual achievements");
		careerInfoList.add("innovation");
		careerInfoList.add("skills");
		careerInfoList.add("responsability with others");
		return careerInfoList;
	}

}
