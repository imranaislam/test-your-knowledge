package com.capitalone.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.capitalone.beans.Questions;
import com.capitalone.service.QuestionService;


@RestController
public class QuestionsController {
	
	@Autowired 
	QuestionService qs;
	
	@CrossOrigin(origins = "*")
	@RequestMapping(value = "/quizquestionlist", method = RequestMethod.POST)
	public  List<Questions> findQuestionsByQuiz(@RequestParam("quiz_id") int quiz_id) {
		
		System.out.println("QuestionController");
		List<Questions> questionList = (List<Questions>) qs.quizQuestions(quiz_id);
		
		return questionList;
	}	

}
