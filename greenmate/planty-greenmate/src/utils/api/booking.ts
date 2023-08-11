import { instance } from './instance';

/**
 * 예약(컨설팅) 목록 전체조회 요청
 * @param date optional. Date 객체가 들어오면 해당 날짜에 해당하는 예약 목록만 출력.
 */
export const findAllBookingApi = async () => {
	const response = await instance.get('/bookings');

	return response;
};

export const findAllBookingBySpidApi = async (spid: number) => {
	const response = await instance.get(`/bookings?spid=${spid}`);

	return response;
};

export const findBookingApi = async (cid: number) => {
	const response = await instance.get(`/bookings/${cid}`);

	return response;
};
