export interface IRequest {
	idx: number; // 각 유형 별 인덱스. 컨설팅: cid, 응급실: eid
	webRTCType: number; // 세션 타입. 컨설팅(0), 응급실(1)
	emergencyType: number; // 응급실 타입 - webRTCType이 응급실(1)인 경우만 유효. 채팅(0), 화상(1)
	username: string;
}

export interface IConsultingSession {
	idx: number;
	webRTCType: number;
	username: string;
	token: string;
}
