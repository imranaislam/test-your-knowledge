package com.capitalone.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.capitalone.beans.Questions;
import com.capitalone.service.TakeQuizService;

@RestController
public class QuizController {

	@Autowired
	private TakeQuizService takeQuizService;
	
	@CrossOrigin(origins = "*")
	@RequestMapping(value = "/takequiz", method = RequestMethod.POST)
	public List<Questions> takequiz(@RequestParam("subjectArea") int subjectArea,
			@RequestParam("expertiseLevel") int expertiseLevel) {
		System.out.println("QuizController");
		List<Questions> questions = (List<Questions>) takeQuizService.takeQuizService(subjectArea, expertiseLevel);
		System.out.println(questions.toString());
		return questions;
	}
}
