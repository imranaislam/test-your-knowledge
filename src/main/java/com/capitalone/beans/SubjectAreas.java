package com.capitalone.beans;

public class SubjectAreas {
	private int quiz_id;
	private String quiz_subject_area;
	private int quiz_creator_id;

	public SubjectAreas() {
		super();
		// TODO Auto-generated constructor stub
	}

	public SubjectAreas(int quiz_id, String quiz_subject_area, int quiz_creator_id) {
		super();
		this.quiz_id = quiz_id;
		this.quiz_subject_area = quiz_subject_area;
		this.quiz_creator_id = quiz_creator_id;
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

	public int getQuiz_creator_id() {
		return quiz_creator_id;
	}

	public void setQuiz_creator_id(int quiz_creator_id) {
		this.quiz_creator_id = quiz_creator_id;
	}

	@Override
	public String toString() {
		return "SubjectAreas [quiz_id=" + quiz_id + ", quiz_subject_area=" + quiz_subject_area + ", quiz_creator_id="
				+ quiz_creator_id + "]";
	}

}
