import { ISessionInfo } from 'types/common/request';
import { openviduInstance } from './instance';

// export const createToken = async (sessionId: string) => {
// 	const response = await openviduInstance.post(
// 		`/sessions/${sessionId}/connections`,
// 		// `${APPLICATION_SERVER_URL}api/sessions/${sessionId}/connections`,
// 		{},
// 		{
// 			headers: { 'Content-Type': 'application/json' },
// 		},
// 	);
// 	return response.data; // The token
// };

// export const createSession = async () => {
// 	const response = await openviduInstance.post(`/sessions`, {
// 		headers: { 'Content-Type': 'application/json' },
// 	});
// 	return response.data; // The sessionId
// };

// export const getToken = async () => {
// 	return createToken(await createSession());
// };

export const createEmergencySessionIdApi = async (type: number) => {
	const response = await openviduInstance.post(`/emergencies/${type}`);
	return response;
};

export const createEmergencyConnectionApi = async (sessionInfo: ISessionInfo) => {
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

export const createSubscribeConnectionApi = async (sessionInfo: ISessionInfo) => {
	const body = {
		...sessionInfo,
	};
	const response = await openviduInstance.post(`/consultings/connections`, body);
	return response;
};
