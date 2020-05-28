package com.careerframework.rest.webservices.restfulwebservices;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

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
	
	@PutMapping("/getcareerinfo/{id}/{evidences}")
	public ResponseEntity<String> save(
			@PathVariable("id") int id,
			@PathVariable("evidences") String evidences,
			@RequestBody String info) {
		careerInfoList = this.getCareerInfoUpdated();
		careerInfoList.set(id, evidences);
		return new ResponseEntity<String>(HttpStatus.OK);
	}
	
	public List getCareerInfoUpdated() {
		return careerInfoList;
	}
	
	
}
