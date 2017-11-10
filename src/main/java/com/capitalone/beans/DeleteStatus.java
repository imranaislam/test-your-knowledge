package com.capitalone.beans;

public class DeleteStatus {
	
	private int numberOfRowsDeleted;

	public DeleteStatus() {
		super();
		// TODO Auto-generated constructor stub
	}

	public DeleteStatus(int numberOfRowsDeleted) {
		super();
		this.numberOfRowsDeleted = numberOfRowsDeleted;
	}

	public int getNumberOfRowsDeleted() {
		return numberOfRowsDeleted;
	}

	public void setNumberOfRowsDeleted(int numberOfRowsDeleted) {
		this.numberOfRowsDeleted = numberOfRowsDeleted;
	}

}
