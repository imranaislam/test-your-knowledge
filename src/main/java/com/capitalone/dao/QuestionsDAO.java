package com.capitalone.dao;

import java.util.List;

import com.capitalone.beans.Questions;

public interface QuestionsDAO {
	
	
	public List<Questions> findQuestionsByQuiz(int quiz_id);
	
}
