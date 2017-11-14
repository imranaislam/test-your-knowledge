package com.capitalone.dao;

import java.util.List;

import com.capitalone.beans.QuestionAnswers;

public interface TakeQuizDAO {
	public List<QuestionAnswers> retrieveQuestionAnswers(int subjectarea, int complexity);
}
