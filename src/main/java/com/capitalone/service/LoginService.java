package com.capitalone.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capitalone.beans.User;
import com.capitalone.dao.LoginDAO;

@Service
public class LoginService {
	
	@Autowired
	private LoginDAO loginDAO;
	
	public User loginService(String username, String password) {
		
		return loginDAO.login(username, password);
	}

}
