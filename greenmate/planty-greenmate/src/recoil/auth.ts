import { atom } from 'recoil';
import { IAuth } from 'types/auth';

const authState = atom<IAuth | null>({
	key: 'authState',
	default: null,
	// default: {
	// 	nickname: '',
	// 	id: '',
	// 	status: false,
	// 	profilePhoto: '',
	// 	joinDate: '',
	// 	introduce: '',
	// },
});

export default authState;
