package com.capitalone.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capitalone.beans.DBStatus;
import com.capitalone.dao.AddDAO;

@Service
public class AddService {
	
	@Autowired
	private AddDAO addDAO;
	
	public DBStatus addQuestion(int complexity, int subject, String q, String a1, String a2, String a3, String a4, String result) {
		return addDAO.addQuestion(complexity, subject, q, a1, a2, a3, a4, result);
	}

}
