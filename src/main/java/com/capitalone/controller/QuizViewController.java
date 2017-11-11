package com.capitalone.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMethod;

import com.capitalone.beans.Quiz;
import com.capitalone.service.QuizViewService;


@RestController
public class QuizViewController {
	
	@Autowired
	private QuizViewService quizViewService;
	
	@CrossOrigin(origins = "*")
	@RequestMapping(value = "/viewquiz", method = RequestMethod.GET)
	public List<Quiz> findAllQuizzes() {
		
		System.out.println("QuizViewController");
		return quizViewService.quizViewService();
	}
	

}
