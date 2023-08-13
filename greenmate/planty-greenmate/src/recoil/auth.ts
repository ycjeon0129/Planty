import { atom } from 'recoil';
import { IAuth } from 'types/auth';

export const authState = atom<IAuth | null>({
	key: 'authState',
	default: null,
});

export const activeState = atom<boolean>({
	key: 'activeState',
	default: false,
});
