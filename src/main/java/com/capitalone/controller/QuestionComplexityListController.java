package com.capitalone.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.capitalone.beans.QuestionComplexityList;
import com.capitalone.service.QuestionComplexityListService;

@RestController
public class QuestionComplexityListController {

	@Autowired
	private QuestionComplexityListService questionComplexityListService;

	@CrossOrigin(origins = "*")
	@RequestMapping(value = "/questioncomplexitylist", method = RequestMethod.GET)
	public List<QuestionComplexityList> retrieveQuestionComplexityList() {
		System.out.println("QuestionComplexityList Controller");
		List<QuestionComplexityList> questionComplexityList = (List<QuestionComplexityList>) questionComplexityListService
				.retrieveQuestionComplexityList();
		System.out.println(questionComplexityList.toString());
		return questionComplexityList;
	}

}
