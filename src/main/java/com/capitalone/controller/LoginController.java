package com.capitalone.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.capitalone.beans.User;
import com.capitalone.service.DeleteService;
import com.capitalone.service.LoginService;



@RestController
public class LoginController {
	
	@Autowired
	private LoginService loginService;
	
	@Autowired
	private DeleteService deleteService;

	
	//@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value="/login", method=RequestMethod.POST)
	public User login(@RequestParam("username") String username, @RequestParam("password") String password ) {
		System.out.println("Login Controller");
		return loginService.loginService(username, password);
	}

	
	@RequestMapping(value="/delete", method=RequestMethod.POST)
	public void delete(@RequestParam("questionId") int questionId) {
		System.out.println("delete controller");
		deleteService.deleteService(questionId);
	}
	
}
