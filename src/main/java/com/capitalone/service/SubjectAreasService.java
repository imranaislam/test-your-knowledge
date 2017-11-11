package com.capitalone.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capitalone.beans.SubjectAreas;
import com.capitalone.dao.SubjectAreasDAO;

@Service
public class SubjectAreasService {

	@Autowired
	private SubjectAreasDAO subjectAreasDAO;

	public List<SubjectAreas> retrieveSubjectAreasService() {
		System.out.println("SubjectAreasService");
		return subjectAreasDAO.retrieveSubjectAreas();

	}

}
