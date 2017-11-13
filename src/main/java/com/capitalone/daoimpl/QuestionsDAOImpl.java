package com.capitalone.daoimpl;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.capitalone.beans.Questions;
import com.capitalone.dao.QuestionsDAO;

@Repository
public class QuestionsDAOImpl implements QuestionsDAO {
	@Autowired
	private JdbcTemplate jdbcTemplate;

	@Override
	public List<Questions> findQuestionsByQuiz(int quiz_id) {
		System.out.println(" quiz id:  " + quiz_id);


		String sql = "SELECT question_id, question_text "
				+ "FROM testyourknowledgelevel.questions "
				+ "Where quiz_id = ? ";

		
		List<Questions> questions = jdbcTemplate.query(sql, new RowMapper<Questions>() {

			@Override
			public Questions mapRow(ResultSet rs, int rowNum) throws SQLException {
				Questions questions = new Questions();

				questions.setQuestion_text(rs.getString("question_text"));
				questions.setQuestion_id(rs.getInt("question_id"));
				System.out.println("QuestionDAOImpl");
				return questions;
			}

		}, quiz_id);
		return (List<Questions>) questions;
	}

}
