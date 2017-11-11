package com.capitalone.dao;

import java.util.List;

import com.capitalone.beans.Questions;

public interface TakeQuizDAO {
	public List<Questions> retrieveQuestions(int subjectarea, int complexity);
}
