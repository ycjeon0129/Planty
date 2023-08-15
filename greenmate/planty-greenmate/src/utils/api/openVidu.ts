import { openviduInstance } from './instance';

/**
 * 응급실 세션의 토큰을 가져옴.
 *  */
export const getEmergencyTokenApi = async (eid: number) => {
	const response = await openviduInstance.get(`/emergencies/sessions/${eid}`);
	return response;
};

/**
 * 구독 컨설팅 세션의 토큰을 가져옴.
 *  */
export const getConsultingTokenApi = async (cid: number) => {
	const response = await openviduInstance.get(`/consultings/sessions/${cid}`);
	return response;
};
