package com.capitalone.dao;

import com.capitalone.beans.User;

public interface LoginDAO {
	
	public User login(String username, String password);

}
