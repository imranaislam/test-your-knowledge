package com.capitalone.daoimpl;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.capitalone.beans.Answer;
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

		String sql1 = "SELECT question_id, question_text from testyourknowledgelevel.questions where quiz_id = ? AND question_complexity_id = ?";

		List<QuestionAnswers> questionAnswers = jdbcTemplate.query(sql1, new RowMapper<QuestionAnswers>() {

			@Override
			public QuestionAnswers mapRow(ResultSet rs, int rowNum) throws SQLException {
				QuestionAnswers question = new QuestionAnswers();
				question.setQuestion_id(rs.getInt(1));
				question.setQuestion_text(rs.getString(2));
				return question;
			}

		}, subjectarea, expertiseLevel);
		
		String sql2 = "SELECT answer_id, answer_option_text, answer_option_validity_flag FROM testyourknowledgelevel.answers where question_id = ?";
		
		for (QuestionAnswers question: questionAnswers) {
			List<Answer> answers = jdbcTemplate.query(sql2, new RowMapper<Answer>() {

				@Override
				public Answer mapRow(ResultSet rs, int rowNum) throws SQLException {
					Answer answer = new Answer();
					answer.setAnswer_id(rs.getInt(1));
					answer.setAnswer_option_text(rs.getString(2));
					answer.setAnswer_option_validity_flag(rs.getString(3));
					return answer;
				}
			}, question.getQuestion_id());
			
			question.setAnswers(answers);
		}
		
		
		return questionAnswers;
	}		

}
