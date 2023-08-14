import { atom } from 'recoil';
import { IAuth } from 'types/auth';
import { IConsultingSession } from 'types/consulting';

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
