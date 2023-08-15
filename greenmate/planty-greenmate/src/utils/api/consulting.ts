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
