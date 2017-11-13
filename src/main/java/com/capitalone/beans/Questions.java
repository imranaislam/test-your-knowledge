package com.capitalone.beans;

public class Questions {
	private int question_id;
	private String question_text;


	public Questions() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Questions(int question_id, String question_text, String answer_option_text,
			String answer_option_validity_flag) {
		super();
		this.question_id = question_id;
		this.question_text = question_text;

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

	@Override
	public String toString() {
		return "Questions [question_id=" + question_id + ", question_text=" + question_text + "]";
	}




}
