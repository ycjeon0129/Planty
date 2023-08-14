export interface IConsultingSession {
	webRTCType: number; // 구독 컨설팅 : 0, 응급실 : 1
	token: string;
}

export interface ISessionInfo {
	eid: number;
	sessionId: string;
}
