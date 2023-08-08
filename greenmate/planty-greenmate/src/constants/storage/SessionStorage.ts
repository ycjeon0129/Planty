class SessionStorage {
	static setItem(key: string, value: string) {
		if (typeof window !== 'undefined') {
			sessionStorage.setItem(key, value);
		}
	}

	static getItem(key: string) {
		if (typeof window !== 'undefined') {
			return sessionStorage.getItem(key);
		}
		// window객체 localStorage, sessionStorage는 값이 없을때 null
		return null;
	}

	static removeItem(key: string) {
		if (typeof window !== 'undefined') {
			sessionStorage.removeItem(key);
		}
	}

	static initUser() {
		if (typeof window !== 'undefined') {
			// sessionStorage.setItem('roleName', 'nonMember');
			// sessionStorage.removeItem('memberId');
			// sessionStorage.removeItem('creatorId');
			// sessionStorage.removeItem('socialLogin');
			// sessionStorage.removeItem('nickname');
			// sessionStorage.removeItem('profileImage');
		}
	}
}

export default SessionStorage;
