package com.capitalone.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.capitalone.beans.Registration;
import com.capitalone.daoimpl.RegistrationDAOImpl;

@RestController
public class RegistrationController {
	
	@Autowired
	private RegistrationDAOImpl regDAO;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value="/insertUserOrAdmin", method=RequestMethod.POST)
	public String insertUserOrAdmin(@RequestBody Registration register){
		System.out.println("Registration Controller");
		regDAO.insertUser(register);
		System.out.println("inserted");
		//return "/static/login.html";
		return "success";
		
	}

}
