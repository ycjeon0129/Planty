import { useState, useEffect } from 'react';
import { IBooking } from 'types/subscribe';
import { findAllBookingBySpidApi } from 'utils/api/booking';

const useAllBookingBySpid = (spid: number) => {
	const [bookings, setBookings] = useState<IBooking[]>([]);

	const fetchData = async (reqSpid: number) => {
		try {
			const response = await findAllBookingBySpidApi(reqSpid);
			setBookings(response.data);
		} catch (error) {
			console.error('에러', error);
		}
	};

	useEffect(() => {
		fetchData(spid);
	}, [spid]);

	return bookings;
};

export default useAllBookingBySpid;
