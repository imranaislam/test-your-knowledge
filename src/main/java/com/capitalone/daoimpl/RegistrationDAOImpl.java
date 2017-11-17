package com.capitalone.daoimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.capitalone.beans.Registration;
import com.capitalone.dao.RegistrationDAO;

@Repository
public class RegistrationDAOImpl implements RegistrationDAO {
	
	@Autowired
	private JdbcTemplate jdbcTemplate;

	@Override
	public void insertUser(Registration registration) {
		System.out.println("Registration DAO");
		//String sql = "INSERT into testyourknowledgelevel.users(user_name, password, last_name, first_name, email_id, role_id) VALUES (?,?,?,?,?,?)";
		String sql = "INSERT into testyourknowledgelevel.users(user_name, password, last_name, first_name, email_id, role_id) VALUES (?,crypt(?, gen_salt('md5')),?,?,?,?)";
		jdbcTemplate.update(sql, registration.getUserName(), registration.getPassword(), registration.getLastName(), registration.getFirstName(), registration.getEmail(), registration.getRoleId());
	}

}
