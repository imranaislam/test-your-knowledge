package com.capitalone.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capitalone.beans.Questions;
import com.capitalone.dao.QuestionsDAO;

@Service
public class QuestionService {
	
	@Autowired
	public QuestionsDAO questionsDAO;
	
	public List<Questions> quizQuestions(int quiz_id){
		System.out.println("QuestionService");
		return questionsDAO.findQuestionsByQuiz(quiz_id);
		
	}

}
