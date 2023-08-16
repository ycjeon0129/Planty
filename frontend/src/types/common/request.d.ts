export interface IConsultingSession {
	webRTCType: number; // 구독 컨설팅 : 0, 응급실 : 1
	token: string;
	idx: number; // eid or cid
}

export interface IEmergencySessionInfo {
	eid: number;
	sessionId: string;
}

export interface ISubscribeSessionInfo {
	cid: number;
	sessionId: string;
}
