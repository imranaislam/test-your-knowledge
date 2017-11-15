package com.capitalone.beans;

import java.util.List;

public class QuestionAnswers {
	private int question_id;
	private String question_text;
	
	private List<Answer> answers;
	
	public QuestionAnswers() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public QuestionAnswers(int question_id, String question_text, List<Answer> answers) {
		super();
		this.question_id = question_id;
		this.question_text = question_text;
		this.answers = answers;
	}

	public int getQuestion_id() {
		return question_id;
	}
	
	public void setQuestion_id(int question_id) {
		this.question_id = question_id;
	}
	
	public String getQuestion_text() {
		return question_text;
	}
	
	public void setQuestion_text(String question_text) {
		this.question_text = question_text;
	}
	public List<Answer> getAnswers() {
		return answers;
	}
	
	public void setAnswers(List<Answer> answers) {
		this.answers = answers;
	}


	@Override
	public String toString() {
		return "QuestionAnswers [question_id=" + question_id + ", question_text=" + question_text + ", answers="
				+ answers + "]";
	}

}
