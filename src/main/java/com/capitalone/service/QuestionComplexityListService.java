package com.capitalone.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capitalone.beans.QuestionComplexityList;
import com.capitalone.dao.QuestionComplexityListDAO;

@Service
public class QuestionComplexityListService {

	@Autowired
	private QuestionComplexityListDAO questionComplexityListDAO;

	public List<QuestionComplexityList> retrieveQuestionComplexityList() {
		// TODO Auto-generated method stub

		System.out.println("QuestionComplexityListService");
		return questionComplexityListDAO.retrieveQuestionComplexityList();

	}
}
