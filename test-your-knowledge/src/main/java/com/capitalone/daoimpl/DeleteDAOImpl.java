package com.capitalone.daoimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.capitalone.dao.DeleteDAO;

@Repository
public class DeleteDAOImpl implements DeleteDAO {

	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@Override
	public void delete(int questionId) {
		
		System.out.println("Delete DAO");
		
//		String sql = "DELETE FROM testyourknowledge.question WHERE questionid=?";
//		jdbcTemplate.update(sql, questionId);
//		
	}

}
