import { instance } from './instance';

export const findAllEmergencyApi = async () => {
	const response = await instance.get('/emergencies');

	return response;
};

export const findEmergencyApi = async (eid: number) => {
	const response = await instance.get(`/emergencies/${eid}`);

	return response;
};
