import { atom } from 'recoil';
import { IAuth } from 'types/auth';

export const authState = atom<IAuth | null>({
	key: 'authState',
	default: null,
});

export const activityState = atom<boolean>({
	key: 'activityState',
	default: false,
});
