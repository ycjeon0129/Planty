import { atom } from 'recoil';
import { IAuth } from 'types/auth';
import { IConsultingSession, IRequest } from 'types/consulting';

// 로그인 정보
export const authState = atom<IAuth | null>({
	key: 'authState',
	default: null,
});

// 활동 상태 정보
export const activityState = atom<boolean>({
	key: 'activityState',
	default: false,
});

// 현재 진행 중인 컨설팅 세션 정보
export const consultingSessionState = atom<IConsultingSession | null>({
	key: 'consultingSessionState',
	default: null,
});

export interface IModalControl {
	open: boolean;
	handleOpen: () => void;
	handleClose: () => void;
}

export const modalControlState = atom<IModalControl | null>({
	key: 'modalControlState',
	default: null,
});

export const consultingRequestState = atom<IRequest[]>({
	key: 'consultingRequestState',
	default: [],
});
