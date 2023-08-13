import { openviduInstance } from './instance';

export const createToken = async (sessionId: string) => {
	const response = await openviduInstance.post(
		`/sessions/${sessionId}/connections`,
		// `${APPLICATION_SERVER_URL}api/sessions/${sessionId}/connections`,
		{},
		{
			headers: { 'Content-Type': 'application/json' },
		},
	);
	return response.data; // The token
};

export const createSession = async () => {
	const response = await openviduInstance.post(`/sessions`, {
		headers: { 'Content-Type': 'application/json' },
	});
	return response.data; // The sessionId
};

export const getToken = async () => {
	return createToken(await createSession());
};
