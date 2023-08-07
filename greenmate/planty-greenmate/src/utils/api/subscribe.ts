import { instance } from './instance';

/**
 * 식물의 온/습도 데이터를 요청
 * @url /greenmate/connection
 * @returns response
 */

export const findPlantDataApi = async (sid: number) => {
	const response = await instance.get(`/subscribe/${sid}/plants`);

	return response;
};

export const findSubscribes = async () => {
	const response = await instance.get('/greenmate/connection');

	return response;
};
