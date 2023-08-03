import findConsultingApi from 'utils/api/booking';
import { ISubscribe } from 'types/dummy';
import { useEffect, useState } from 'react';
import { Value } from 'types/global';

/**
 * 캘린더 상의 선택일자에 해당하는 예약(컨설팅) 목록을 불러와 리턴하는 커스텀 훅
 * @returns 컨설팅 내역 목록 배열
 */
const useBookingList = ({ date }: { date: Value }): ISubscribe[] => {
	const [bookings, setBookings] = useState<ISubscribe[]>([]);

	const fetchData = async () => {
		try {
			const response = await findConsultingApi({ date });
			if (response?.data.subscribes) setBookings(response.data.subscribes);
		} catch (error) {
			console.error('에러', error);
		}
	};

	useEffect(() => {
		fetchData();
	});

	return bookings;
};

export default useBookingList;
