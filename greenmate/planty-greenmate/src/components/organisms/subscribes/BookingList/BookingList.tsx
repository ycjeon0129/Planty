/* eslint-disable react/require-default-props */
import React from 'react';
import BookingListItem from 'components/atoms/subscribes/BookingListItem/BookingListItem';
import useAllBooking from 'hooks/api/useAllBooking';
import './BookingList.scss';
import { Value } from 'types/global';
import useBookingList from 'hooks/api/useBookingList';

function BookingList({ date }: { date?: Value }) {
	const bookingsInDate = useBookingList(date as Value);
	const bookings = useAllBooking();

	if (date ? bookingsInDate.length : bookings.length)
		return (
			<div className="booking-list-container">
				{date
					? bookingsInDate?.map((b) => <BookingListItem booking={b} />)
					: bookings?.map((b) => <BookingListItem booking={b} />)}
			</div>
		);

	return (
		<div className="booking-list-container no-content">
			<h2>예약된 컨설팅이 없습니다.</h2>
		</div>
	);
}

export default BookingList;
