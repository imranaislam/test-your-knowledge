package com.capitalone.daoimpl;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.capitalone.beans.Quiz;
import com.capitalone.dao.QuizViewDAO;

@Repository
public class QuizViewDAOImpl implements QuizViewDAO {
	
	@Autowired
	private JdbcTemplate myJdbcTemplate;

	@Override
	public List<Quiz> findAllQuizzes() {
		
		String sqlStmt = "SELECT quiz.quiz_id, quiz.quiz_subject_area, quiz.quiz_description, quiz.quiz_creator_id, questions.question_id,"
+ "questions.question_text,questions.question_complexity_id, users.user_id,users.role_id"
+ "FROM testyourknowledgelevel.quiz ,  testyourknowledgelevel.questions, testyourknowledgelevel.users"
+ "WHERE users.user_id = quiz.quiz_creator_id"
+ "AND quiz.quiz_id = questions.quiz_id ";
		
		List<Quiz> listQuizzes = myJdbcTemplate.query(sqlStmt, new RowMapper<Quiz>() {
			
			@Override
			public Quiz mapRow(ResultSet rs, int nRows) throws SQLException {
				Quiz quiz = new Quiz();
				
				quiz.setQuiz_id(rs.getInt("quiz_id"));
				quiz.setQuiz_subject_area(rs.getString("quiz_subject_area"));
				quiz.setQuiz_description(rs.getString("quiz_description"));
				quiz.setQuiz_creator_id(rs.getInt("quiz_creator_id"));
				quiz.setQuestion_id(rs.getInt("question_id"));
				quiz.setQuestion_text(rs.getString("question_text"));
				quiz.setQuestion_complexity_id(rs.getInt("question_complexity_id"));
				quiz.setUser_id(rs.getInt("user_id"));
				quiz.setRole_id(rs.getInt("role_id"));		
				
				return quiz;
		
			}		
			
		});
		
		return listQuizzes;
		
	}

}
