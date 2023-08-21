import { instance } from './instance';

/**
 * 식물의 온/습도 데이터를 요청
 * @url /greenmate/connection
 * @returns response
 */
export const findAllSubscribeApi = async () => {
	const response = await instance.get('/subscribes');

	return response;
};

export const findDoneSubscribeApi = async (done: number) => {
	const response = await instance.get(`/subscribes?done=${done}`);

	return response;
};

export const findSubscribeApi = async (sid: number) => {
	const response = await instance.get(`/subscribes/${sid}`);

	return response;
};

export const saveSubscribeApi = async (spid: number) => {
	const body = JSON.stringify({
		spid,
	});
	const response = await instance.post(`/subscribes`, body);
	return response;
};
