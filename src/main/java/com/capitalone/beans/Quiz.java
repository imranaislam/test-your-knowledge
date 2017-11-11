package com.capitalone.beans;

public class Quiz {
	
	private int quiz_id;
	private String quiz_subject_area;
	private String quiz_description;
	private int quiz_creator_id;
	private int question_id;
	private String question_text;
	private int question_complexity_id;
	private int user_id;
	private int role_id;
	
	
	public Quiz() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Quiz(int quiz_id, String quiz_subject_area, String quiz_description, int quiz_creator_id, int question_id,
			String question_text, int question_complexity_id, int user_id, int role_id) {
		super();
		this.quiz_id = quiz_id;
		this.quiz_subject_area = quiz_subject_area;
		this.quiz_description = quiz_description;
		this.quiz_creator_id = quiz_creator_id;
		this.question_id = question_id;
		this.question_text = question_text;
		this.question_complexity_id = question_complexity_id;
		this.user_id = user_id;
		this.role_id = role_id;
	}


	public int getQuiz_id() {
		return quiz_id;
	}


	public void setQuiz_id(int quiz_id) {
		this.quiz_id = quiz_id;
	}


	public String getQuiz_subject_area() {
		return quiz_subject_area;
	}


	public void setQuiz_subject_area(String quiz_subject_area) {
		this.quiz_subject_area = quiz_subject_area;
	}


	public String getQuiz_description() {
		return quiz_description;
	}


	public void setQuiz_description(String quiz_description) {
		this.quiz_description = quiz_description;
	}


	public int getQuiz_creator_id() {
		return quiz_creator_id;
	}


	public void setQuiz_creator_id(int quiz_creator_id) {
		this.quiz_creator_id = quiz_creator_id;
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


	public int getQuestion_complexity_id() {
		return question_complexity_id;
	}


	public void setQuestion_complexity_id(int question_complexity_id) {
		this.question_complexity_id = question_complexity_id;
	}


	public int getUser_id() {
		return user_id;
	}


	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}


	public int getRole_id() {
		return role_id;
	}


	public void setRole_id(int role_id) {
		this.role_id = role_id;
	}


	@Override
	public String toString() {
		return "Quiz [quiz_id=" + quiz_id + ", quiz_subject_area=" + quiz_subject_area + ", quiz_description="
				+ quiz_description + ", quiz_creator_id=" + quiz_creator_id + ", question_id=" + question_id
				+ ", question_text=" + question_text + ", question_complexity_id=" + question_complexity_id
				+ ", user_id=" + user_id + ", role_id=" + role_id + "]";
	}
	
	
	
	

}
