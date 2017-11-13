package com.capitalone.daoimpl;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.capitalone.beans.Questions;
import com.capitalone.dao.TakeQuizDAO;

@Repository
public class TakeQuizDAOImpl implements TakeQuizDAO {
	@Autowired
	private JdbcTemplate jdbcTemplate;

	@Override
	public List<Questions> retrieveQuestions(int subjectarea, int expertiseLevel) {
		System.out.println("subjectarea recieved " + subjectarea);
		System.out.println("expertiseLevel received" + expertiseLevel);

		String sql = "SELECT Q.question_id, Q.question_text, A.answer_option_text, A.answer_option_validity_flag "
				+ "FROM testyourknowledgelevel.questions AS Q, testyourknowledgelevel.answers AS A "
				+ "WHERE Q.question_id = A.question_id " + "AND quiz_id = ? " + "AND question_complexity_id = ?";

		List<Questions> questions = jdbcTemplate.query(sql, new RowMapper<Questions>() {

			@Override
			public Questions mapRow(ResultSet rs, int rowNum) throws SQLException {
				Questions questions = new Questions();
				System.out.println("questions available");
				questions.setQuestion_id(rs.getInt("question_id"));
				questions.setQuestion_text(rs.getString("question_text"));
				questions.setAnswer_option_text(rs.getString("answer_option_text"));
				questions.setAnswer_option_validity_flag(rs.getString("answer_option_validity_flag"));
				return questions;
			}

		}, subjectarea, expertiseLevel);
		return (List<Questions>) questions;
	}

}
