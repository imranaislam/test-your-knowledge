package com.capitalone.daoimpl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.capitalone.beans.DBStatus;
import com.capitalone.dao.AddDAO;

@Repository
public class AddDAOImpl implements AddDAO {

	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@Override
	public DBStatus addQuestion(int complexity, int subject, String q, String a1, String a2, String a3, String a4,String result) {
		
		String sql1 = "INSERT INTO testyourknowledgelevel.questions(question_text, question_complexity_id, quiz_id) VALUES ( ?, ?, ?)"; 
		
		PreparedStatementCreator psc = new PreparedStatementCreator() {
			
			@Override
			public PreparedStatement createPreparedStatement(Connection con) throws SQLException {
				PreparedStatement ps = con.prepareStatement(sql1, Statement.RETURN_GENERATED_KEYS);
				ps.setString(1, q);
				ps.setInt(2, complexity);
				ps.setInt(3, subject);
				return ps;
			}
		};
		GeneratedKeyHolder keyHolder = new GeneratedKeyHolder();
		jdbcTemplate.update(psc, keyHolder);
		int q_id = (int) keyHolder.getKeys().get("question_id");
		
		
		String sql2 = "INSERT INTO testyourknowledgelevel.answers(answer_option_text, question_id) VALUES (?, ?)";
		List<String> answers = Arrays.asList(a1, a2, a3, a4);
		for (String answer: answers) {
			jdbcTemplate.update(sql2, answer,q_id);
		}
		
		String sql3 = "UPDATE testyourknowledgelevel.answers SET answer_option_validity_flag='Y' WHERE question_id=? AND answer_option_text=?";
		jdbcTemplate.update(sql3, q_id,result);
		return new DBStatus(1);
	}

}
