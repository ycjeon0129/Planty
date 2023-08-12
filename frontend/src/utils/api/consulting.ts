import { instance } from './instance';

export const findAllConsultingApi = async () => {
	const response = await instance.get('/consultings');
	return response;
};

export const findAllConsultingBySidApi = async (sid: number) => {
	const response = await instance.get(`/consultings/${sid}`);
	return response;
};
