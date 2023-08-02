import { atom } from 'recoil';
import { IUser } from 'types/auth';

const userState = atom<IUser | null>({
	key: 'userState',
	default: null,
});

export default userState;
