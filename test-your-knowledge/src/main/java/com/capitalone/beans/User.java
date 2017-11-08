package com.capitalone.beans;


	public class User {
		
		private int userid;
		private String username;
		private String lastname;
		private String firstname;
		private String userrole;
		
		public User() {
			super();
			// TODO Auto-generated constructor stub
		}

		public User(int userid, String username, String lastname, String firstname, String userrole) {
			super();
			this.userid = userid;
			this.username = username;
			this.lastname = lastname;
			this.firstname = firstname;
			this.userrole = userrole;
		}

		public int getUserid() {
			return userid;
		}

		public void setUserid(int userid) {
			this.userid = userid;
		}

		public String getUsername() {
			return username;
		}

		public void setUsername(String username) {
			this.username = username;
		}

		public String getLastname() {
			return lastname;
		}

		public void setLastname(String lastname) {
			this.lastname = lastname;
		}

		public String getFirstname() {
			return firstname;
		}

		public void setFirstname(String firstname) {
			this.firstname = firstname;
		}

		public String getUserrole() {
			return userrole;
		}

		public void setUserrole(String userrole) {
			this.userrole = userrole;
		}

		@Override
		public String toString() {
			return "User [userid=" + userid + ", username=" + username + ", lastname=" + lastname + ", firstname="
					+ firstname + ", userrole=" + userrole + "]";
		}

	}

