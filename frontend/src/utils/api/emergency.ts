import { ISessionInfo } from 'types/common/request';
import { instance } from './instance';

export const findAllEmergencyHistoryApi = async () => {
	const response = await instance.get('/emergencies');
	// console.log('emergency.ts', response);

	return response;
};

export const createSessionIdApi = async (type: number) => {
	const response = await instance.post(`/emergencies/${type}`);
	return response;
};

export const createConnectionApi = async (sessionInfo: ISessionInfo) => {
	const body = {
		...sessionInfo,
	};
	const response = await instance.post(`/emergencies/connections`, body);
	return response;
};
