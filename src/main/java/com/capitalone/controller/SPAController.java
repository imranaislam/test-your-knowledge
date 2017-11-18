package com.capitalone.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("page")
public class SPAController {

	@RequestMapping
	public String getSPA() {
		System.out.println("In getSPA() method");
		return "forward:/static/dist/index.html";
	}

}