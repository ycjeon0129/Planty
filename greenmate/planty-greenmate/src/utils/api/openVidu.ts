import { openviduInstance } from './instance';

export const createToken = async (sessionId: string) => {
	const response = await openviduInstance.post(
		`/sessions/${sessionId}/connections`,
		{},
		{
			headers: { 'Content-Type': 'application/json' },
		},
	);
	return response.data; // The token
};

// export const createSession = async (sessionId: string) => {
// 	const response = await openviduInstance.post(
// 		`/sessions`,
// 		{ customSessionId: sessionId },
// 		{
// 			headers: { 'Content-Type': 'application/json' },
// 		},
// 	);
// 	return response.data; // The sessionId
// };

export const getToken = async () => {
	// TODO : 백엔드에 요청해서 sessionId 가져와야 함
	return createToken('ses_S584w5wJDZ');
};
