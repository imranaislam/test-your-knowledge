package com.capitalone.beans;

public class Answer {

	private int answer_id;
	private String answer_option_text;
	private String answer_option_validity_flag;
	
	public Answer() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Answer(int answer_id, String answer_option_text, String answer_option_validity_flag) {
		super();
		this.answer_id = answer_id;
		this.answer_option_text = answer_option_text;
		this.answer_option_validity_flag = answer_option_validity_flag;
	}

	public int getAnswer_id() {
		return answer_id;
	}
	
	public void setAnswer_id(int answer_id) {
		this.answer_id = answer_id;
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
		return "Answer [answer_id=" + answer_id + ", answer_option_text=" + answer_option_text
				+ ", answer_option_validity_flag=" + answer_option_validity_flag + "]";
	}
}
