package com.capitalone.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capitalone.beans.Quiz;
import com.capitalone.dao.QuizViewDAO;

@Service
public class QuizViewService {
	
	@Autowired
	private QuizViewDAO quizViewDAO;
	
	public List<Quiz> quizViewService() {
		
		System.out.println("QuizView Service");
		
		List<Quiz> quizzes = new ArrayList<>();
		quizzes=quizViewDAO.findAllQuizzes();
		return quizzes;
	}
	

}
