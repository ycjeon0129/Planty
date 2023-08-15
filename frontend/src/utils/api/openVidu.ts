import { IEmergencySessionInfo, ISubscribeSessionInfo } from 'types/common/request';
import { openviduInstance } from './instance';

export const createEmergencySessionIdApi = async (type: number) => {
	const response = await openviduInstance.post(`/emergencies/${type}`);
	return response;
};

export const createEmergencyConnectionApi = async (sessionInfo: IEmergencySessionInfo) => {
	const body = {
		...sessionInfo,
	};
	const response = await openviduInstance.post(`/emergencies/connections`, body);
	return response;
};

export const createSubscribeSessionIdApi = async () => {
	const response = await openviduInstance.post(`/consultings`);

	return response;
};

export const createSubscribeConnectionApi = async (sessionInfo: ISubscribeSessionInfo) => {
	const body = {
		...sessionInfo,
	};
	const response = await openviduInstance.post(`/consultings/connections`, body);
	return response;
};
