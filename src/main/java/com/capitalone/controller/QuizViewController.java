package com.capitalone.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.capitalone.beans.Quiz;
import com.capitalone.service.QuizViewService;


@RestController
public class QuizViewController {
	
	@Autowired
	QuizViewService qvs;
	
	@CrossOrigin(origins = "*")
	@RequestMapping(value = "/viewquiz", method = RequestMethod.GET)
	public @ResponseBody List<Quiz> findAllQuizzes() {
		List<Quiz> quizList = qvs.quizViewService();
		System.out.println("QuizViewController");
		return quizList;
	}
}
