package com.capitalone.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
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

	
	@CrossOrigin(origins = "http://localhost:4200")
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
	
	@CrossOrigin(origins = "http://10.0.4.174:4200")
	@RequestMapping(value="/add", method=RequestMethod.POST)
	public void addQuestion(@RequestParam("userId") int userId, @RequestParam("subject") int subject,@RequestParam("q1") String q1, @RequestParam("q1a1") String q1a1, @RequestParam("q1a2") String q1a2, @RequestParam("q1a3") String q1a3, @RequestParam("q1a4") String q1a4) {
		System.out.println("Add Controller");
		System.out.println(userId);
		System.out.println(subject);
		System.out.println(q1);
		System.out.println(q1a1);
		System.out.println(q1a2);
		System.out.println(q1a3);
		System.out.println(q1a4);
	}
	
}
