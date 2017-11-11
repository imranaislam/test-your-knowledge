package com.capitalone.daoimpl;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.capitalone.beans.QuestionComplexityList;
import com.capitalone.dao.QuestionComplexityListDAO;

@Repository
public class QuestionComplexityListDAOImpl implements QuestionComplexityListDAO {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	@Override
	public List<QuestionComplexityList> retrieveQuestionComplexityList() {

		String sql = "SELECT question_complexity_id, question_complexity_level_description"
				+ " FROM testyourknowledgelevel.question_complexity";

		List<QuestionComplexityList> questionComplexityList = jdbcTemplate.query(sql,
				new RowMapper<QuestionComplexityList>() {

					@Override
					public QuestionComplexityList mapRow(ResultSet rs, int rowNum) throws SQLException {
						QuestionComplexityList questionComplexityList = new QuestionComplexityList();
						System.out.println("QuestionComplexityList available");
						questionComplexityList.setQuestion_complexity_id(rs.getInt("question_complexity_id"));
						questionComplexityList.setQuestion_complexity_level_description(
								rs.getString("question_complexity_level_description"));
						return questionComplexityList;
					}

				});

		return (List<QuestionComplexityList>) questionComplexityList;
	}

}
