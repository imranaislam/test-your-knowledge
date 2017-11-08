package com.capitalone.daoimpl;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.capitalone.beans.User;
import com.capitalone.dao.LoginDAO;

@Repository
public class LoginDAOImpl implements LoginDAO {
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@Override
	public User login(String username, String password) {
		System.out.println("Login DAO");
		
		String sql = "SELECT users.user_id, users.user_name, users.first_name, users.last_name, roles.user_role FROM testyourknowledgelevel.users JOIN testyourknowledgelevel.roles ON (users.role_id = roles.role_id) WHERE user_name = ? AND password=?";
		
		System.out.println("sql " + sql);
		List<User> users = jdbcTemplate.query(sql, new RowMapper<User>() {

			@Override
			public User mapRow(ResultSet rs, int rowNum) throws SQLException {
				User user = new User();
				user.setUserid(rs.getInt(1));
				user.setUsername(rs.getString(2));
				user.setFirstname(rs.getString(3));
				user.setLastname(rs.getString(4));
				user.setUserrole(rs.getString(5));
				return user;
			}

		}, username, password);
		
		
		return users.get(0);
	}

}
