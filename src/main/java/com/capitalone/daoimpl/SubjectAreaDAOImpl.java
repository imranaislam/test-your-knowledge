package com.capitalone.daoimpl;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.capitalone.beans.SubjectAreas;
import com.capitalone.dao.SubjectAreasDAO;

@Repository
public class SubjectAreaDAOImpl implements SubjectAreasDAO {
	@Autowired
	private JdbcTemplate jdbcTemplate;

	@Override
	public List<SubjectAreas> retrieveSubjectAreas() {

		String sql = "SELECT quiz_id, quiz_subject_area, quiz_description, quiz_creator_id "
				+ "FROM testyourknowledgelevel.quiz";

		List<SubjectAreas> subjectAreas = jdbcTemplate.query(sql, new RowMapper<SubjectAreas>() {

			@Override
			public SubjectAreas mapRow(ResultSet rs, int rowNum) throws SQLException {
				SubjectAreas subjectAreas = new SubjectAreas();
				System.out.println("questions available");
				subjectAreas.setQuiz_id(rs.getInt("quiz_id"));
				subjectAreas.setQuiz_subject_area(rs.getString("quiz_subject_area") + ": " + rs.getString("quiz_description"));
				subjectAreas.setQuiz_creator_id(rs.getInt("quiz_creator_id"));
				return subjectAreas;
			}

		});
		return (List<SubjectAreas>) subjectAreas;
	}

}
