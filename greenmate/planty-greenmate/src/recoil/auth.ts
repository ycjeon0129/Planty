import { atom } from 'recoil';
import { IAuth } from 'types/auth';

const authState = atom<IAuth>({
	key: 'authState',
	default: {
		nickname: '',
		id: '',
		status: false,
		profilePhoto: '',
		joinDate: '',
		introduce: '',
		currentConsulting: null,
	},
});

export default authState;
