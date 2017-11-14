package com.capitalone.daoimpl;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.capitalone.beans.QuestionAnswers;
import com.capitalone.dao.TakeQuizDAO;

@Repository
public class TakeQuizDAOImpl implements TakeQuizDAO {
	@Autowired
	private JdbcTemplate jdbcTemplate;

	@Override
	public List<QuestionAnswers> retrieveQuestionAnswers(int subjectarea, int expertiseLevel) {
		System.out.println("subjectarea recieved " + subjectarea);
		System.out.println("expertiseLevel received" + expertiseLevel);

		String sql = "SELECT Q.question_id, Q.question_text, A.answer_id, A.answer_option_text, A.answer_option_validity_flag "
				+ "FROM testyourknowledgelevel.questions AS Q, testyourknowledgelevel.answers AS A "
				+ "WHERE Q.question_id = A.question_id " + "AND quiz_id = ? " + "AND question_complexity_id = ?";

		List<QuestionAnswers> questionAnswers = jdbcTemplate.query(sql, new RowMapper<QuestionAnswers>() {

			@Override
			public QuestionAnswers mapRow(ResultSet rs, int rowNum) throws SQLException {
				QuestionAnswers questionAnswers = new QuestionAnswers();
				System.out.println("questions available");
				questionAnswers.setQuestion_id(rs.getInt("question_id"));
				questionAnswers.setQuestion_text(rs.getString("question_text"));
				questionAnswers.setAnswer_id(rs.getInt("answer_id"));
				questionAnswers.setAnswer_option_text(rs.getString("answer_option_text"));
				questionAnswers.setAnswer_option_validity_flag(rs.getString("answer_option_validity_flag"));
				return questionAnswers;
			}

		}, subjectarea, expertiseLevel);
		return (List<QuestionAnswers>) questionAnswers;
	}

}
