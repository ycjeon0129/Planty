import { instance } from './instance';

export const findAllConsultingApi = async () => {
	const response = await instance.get('/consultings');
	// const answer = response.data;

	return response;
};

export const findAllConsultingBySidApi = async (sid: number) => {
	const response = await instance.get(`/consultings/${sid}`);
	return response;
};

export const findEmbeddedInfoByCidApi = async (cid: number) => {
	const response = await instance.get(`/embedded/${cid}`);
	return response;
};
