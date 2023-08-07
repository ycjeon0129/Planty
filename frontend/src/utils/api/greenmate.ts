import { instance } from './instance';

/**
 * 현재 활동 중인 그린메이트의 수를 요청
 * @url /greenmate/connection
 * @returns response
 */
const findGreenmateCountApi = async () => {
	const response = await instance.get('/greenmate/connection');

	return response;
};

export default findGreenmateCountApi;
