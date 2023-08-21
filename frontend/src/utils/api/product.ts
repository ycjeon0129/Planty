import { instance } from './instance';

export const findAllProductApi = async () => {
	const response = await instance.get('/subscribe-products');
	return response;
};

export const findProductBySpidApi = async (spid: number) => {
	const response = await instance.get(`/subscribe-products/${spid}`);
	return response;
};

export const findFilterProductApi = async (param: string) => {
	const response = await instance.get(`/subscribe-products?${param}`);
	return response;
};

/**
 * 결제 요청
 * @param type 0: 이용권 구매, 1: 구독 상품 구매
 * @param idx optional, tpid: 이용권 종류, spid: 구독 상품 종류
 */
export const createProductBuyApi = async (type: number, idx: number) => {
	const body = {
		type,
		idx,
	};
	const response = await instance.post('/payments', body);
	return response;
};
