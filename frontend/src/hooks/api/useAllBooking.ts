import { useEffect, useState } from 'react';
import { IBooking } from 'types/domain/booking';
import { findAllBooking } from 'utils/api/booking';

/**
 * 캘린더 상의 선택일자에 해당하는 예약(컨설팅) 목록을 불러와 리턴하는 커스텀 훅
 * @param date optional. Date 객체가 들어오면 해당 날짜에 해당하는 예약 목록만 출력.
 * @returns 컨설팅 내역 목록 배열
 */
const useAllBooking = (date?: string): IBooking[] => {
	const [bookings, setBookings] = useState<IBooking[]>([]);

	const fetchData = async () => {
		try {
			const response = await findAllBooking();
			if (response?.data) setBookings(response.data);
		} catch (error) {
			console.error('에러', error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	if (date) return bookings.filter((b) => b.date === date);
	return bookings;
};

export default useAllBooking;
