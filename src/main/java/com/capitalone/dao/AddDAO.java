package com.capitalone.dao;

import com.capitalone.beans.DBStatus;

public interface AddDAO {
	
	public DBStatus addQuestion(int complexity, int subject, String q, String a1, String a2, String a3, String a4, String result);

}
