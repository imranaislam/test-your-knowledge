package com.capitalone.beans;

public class Questions {
	private int question_id;
	private String question_text;
	private String answer_option_text;
	private String answer_option_validity_flag;

	public Questions() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Questions(int question_id, String question_text, String answer_option_text,
			String answer_option_validity_flag) {
		super();
		this.question_id = question_id;
		this.question_text = question_text;
		this.answer_option_text = answer_option_text;
		this.answer_option_validity_flag = answer_option_validity_flag;
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

	public String getAnswer_option_text() {
		return answer_option_text;
	}

	public void setAnswer_option_text(String answer_option_text) {
		this.answer_option_text = answer_option_text;
	}

	public String getAnswer_option_validity_flag() {
		return answer_option_validity_flag;
	}

	public void setAnswer_option_validity_flag(String answer_option_validity_flag) {
		this.answer_option_validity_flag = answer_option_validity_flag;
	}

	@Override
	public String toString() {
		return "Questions [question_id=" + question_id + ", question_text=" + question_text + ", answer_option_text="
				+ answer_option_text + ", answer_option_validity_flag=" + answer_option_validity_flag + "]";
	}

}
