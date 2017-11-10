package com.capitalone.beans;

public class DBStatus {
	
	private int numberOfRowsImpacted;

	public DBStatus() {
		super();
		// TODO Auto-generated constructor stub
	}

	public DBStatus(int numberOfRowsImpacted) {
		super();
		this.numberOfRowsImpacted = numberOfRowsImpacted;
	}

	public int getNumberOfRowsImpacted() {
		return numberOfRowsImpacted;
	}

	public void setNumberOfRowsImpacted(int numberOfRowsImpacted) {
		this.numberOfRowsImpacted = numberOfRowsImpacted;
	}

}
