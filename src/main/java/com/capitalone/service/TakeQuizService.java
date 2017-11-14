package com.capitalone.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capitalone.beans.QuestionAnswers;
import com.capitalone.dao.TakeQuizDAO;

@Service
public class TakeQuizService {

	@Autowired
	private TakeQuizDAO takeQuizDAO;

	public List<QuestionAnswers> takeQuizService(int subjectArea, int expertiseLevel) {
		System.out.println("takeQuizService");
		return takeQuizDAO.retrieveQuestionAnswers(subjectArea, expertiseLevel);
	}

}
