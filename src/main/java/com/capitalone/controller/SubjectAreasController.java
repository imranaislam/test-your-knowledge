package com.capitalone.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.capitalone.beans.SubjectAreas;
import com.capitalone.service.SubjectAreasService;

@RestController
public class SubjectAreasController {

	@Autowired
	private SubjectAreasService subjectAreasService;

	@CrossOrigin(origins = "*")
	@RequestMapping(value = "/subjectareas", method = RequestMethod.GET)
	public List<SubjectAreas> retrieveSubjectAreas() {
		System.out.println("SubjectAreas Controller");
		List<SubjectAreas> subjectAreas = (List<SubjectAreas>) subjectAreasService.retrieveSubjectAreasService();
		System.out.println(subjectAreas.toString());
		return subjectAreas;
	}
}
