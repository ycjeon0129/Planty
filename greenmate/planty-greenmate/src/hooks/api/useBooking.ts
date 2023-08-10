import { useState, useEffect } from 'react';
import { IBooking } from 'types/subscribe';
import { findBookingApi } from 'utils/api/booking';

const useBooking = (cid: number) => {
	const [booking, setBooking] = useState<IBooking>();

	const fetchData = async (reqCid: number) => {
		try {
			const response = await findBookingApi(reqCid);
			setBooking(response.data);
		} catch (error) {
			console.error('에러', error);
		}
	};

	useEffect(() => {
		fetchData(cid);
	}, [cid]);

	return booking;
};

export default useBooking;
