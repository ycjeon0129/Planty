import { instance } from './instance';

export const findAllConsulting = async () => {
	const response = await instance.get('/consultings');

	return response;
};

export const findAllConsultingBySpid = async (spid: number) => {
	const response = await instance.get(`/consultings?spid=${spid}`);

	return response;
};

export const findConsulting = async (cid: number) => {
	const response = await instance.get(`/consultings/${cid}`);

	return response;
};

export const findAllRequest = async () => {
	const response = await instance.get(`/refresh-request`);

	return response;
};

// 응급실 컨설팅 후 컨설팅 일지 전송
export const saveEmergencyAdviceApi = async (eid: number, name: string, content: string) => {
	const body = {
		eid,
		name,
		content,
	};
	const response = await instance.post('/emergencies/sessions/record', JSON.stringify(body));
	return response;
};

// 구독 컨설팅 후 컨설팅 일지 전송
export const saveConsultingAdviceApi = async (
	cid: number,
	recommendedStartDate: string,
	recommendedEndDate: string,
	content: string,
) => {
	const body = {
		cid,
		recommendedStartDate,
		recommendedEndDate,
		content,
	};
	const response = await instance.post('/consultings/sessions/record', JSON.stringify(body));
	return response;
};
