package com.capitalone.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capitalone.dao.DeleteDAO;

@Service
public class DeleteService {
	
	@Autowired
	private DeleteDAO deleteDAO;
	
	public void deleteService(int questionId) {
		System.out.println("Delete Service");
		deleteDAO.delete(questionId);
	}
	
	
}
