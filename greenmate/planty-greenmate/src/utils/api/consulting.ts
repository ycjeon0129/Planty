import { openviduInstance } from './instance';

const APPLICATION_SERVER_URL = process.env.REACT_APP_OPEN_VIDU_SERVER_URL;

export const createToken = async (sessionId: string) => {
	const response = await openviduInstance.post(
		`${APPLICATION_SERVER_URL}api/sessions/${sessionId}/connections`,
		{},
		{
			headers: { 'Content-Type': 'application/json' },
		},
	);
	return response.data; // The token
};

export const createSession = async (sessionId: string) => {
	const response = await openviduInstance.post(
		`${APPLICATION_SERVER_URL}api/sessions`,
		{ customSessionId: sessionId },
		{
			headers: { 'Content-Type': 'application/json' },
		},
	);
	return response.data; // The sessionId
};

export const getToken = async (sessionId: string) => {
	return createToken(await createSession(sessionId));
};
