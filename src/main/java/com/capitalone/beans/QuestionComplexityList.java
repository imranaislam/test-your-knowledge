package com.capitalone.beans;

public class QuestionComplexityList {
	private int question_complexity_id;
	private String question_complexity_level_description;

	public QuestionComplexityList() {
		super();
		// TODO Auto-generated constructor stub
	}

	public QuestionComplexityList(int question_complexity_id, String question_complexity_level_description) {
		super();
		this.question_complexity_id = question_complexity_id;
		this.question_complexity_level_description = question_complexity_level_description;
	}

	public int getQuestion_complexity_id() {
		return question_complexity_id;
	}

	public void setQuestion_complexity_id(int question_complexity_id) {
		this.question_complexity_id = question_complexity_id;
	}

	public String getQuestion_complexity_level_description() {
		return question_complexity_level_description;
	}

	public void setQuestion_complexity_level_description(String question_complexity_level_description) {
		this.question_complexity_level_description = question_complexity_level_description;
	}

	@Override
	public String toString() {
		return "QuestionComplexityList [question_complexity_id=" + question_complexity_id
				+ ", question_complexity_level_description=" + question_complexity_level_description + "]";
	}

}
