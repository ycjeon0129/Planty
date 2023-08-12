import { instance } from './instance';

/**
 * 예약(컨설팅) 목록 전체조회 요청
 * @param date optional. Date 객체가 들어오면 해당 날짜에 해당하는 예약 목록만 출력.
 */
export const findAllBooking = async () => {
	const response = await instance.get(`/bookings`);
	return response;
};

export const deleteBooking = async (cid: number) => {
	const response = await instance.delete(`/bookings/${cid}`);

	return response;
};

export const findIsBookingInDateApi = async (date: string, sid: number) => {
	const response = await instance.get(`/bookings/${date}/${sid}`);
	return response;
};

export const saveBooking = async (sid: number, date: string, time: number) => {
	const body = {
		sid,
		date,
		timeId: time,
	};
	const response = await instance.post(`/bookings`, body);

	return response;
};
