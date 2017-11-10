package com.capitalone.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.capitalone.beans.DBStatus;
import com.capitalone.beans.User;
import com.capitalone.service.AddService;
import com.capitalone.service.DeleteService;
import com.capitalone.service.LoginService;



@RestController
public class LoginController {
	
	@Autowired
	private LoginService loginService;
	
	@Autowired
	private AddService addService;
	
	@Autowired
	private DeleteService deleteService;

	
	@CrossOrigin(origins = "*")
	@RequestMapping(value="/login", method=RequestMethod.POST)
	public User login(@RequestParam("username") String username, @RequestParam("password") String password ) {
		System.out.println("Login Controller");
		return loginService.loginService(username, password);
	}

	@CrossOrigin(origins = "*")
	@RequestMapping(value="/delete", method=RequestMethod.POST)
	public DBStatus delete(@RequestParam("questionId") int questionId) {
		System.out.println("delete controller");
		return deleteService.deleteService(questionId);
		
	}
	

	@CrossOrigin(origins = "*")
	@RequestMapping(value="/add", method=RequestMethod.POST)
	public DBStatus addQuestion(@RequestParam("complexity") int complexity, @RequestParam("subject") int subject,@RequestParam("q") String q, @RequestParam("a1") String a1, @RequestParam("a2") String a2, @RequestParam("a3") String a3, @RequestParam("a4") String a4, @RequestParam("result") String result) {
		System.out.println("Add Controller");
		return addService.addQuestion(complexity, subject, q, a1, a2, a3, a4, result);

	}
}
