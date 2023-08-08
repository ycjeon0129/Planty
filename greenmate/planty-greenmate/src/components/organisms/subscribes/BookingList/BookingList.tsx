import React from 'react';
import BookingListItem from 'components/atoms/subscribes/BookingListItem/BookingListItem';
import useAllBooking from 'hooks/api/useAllBooking';
import './BookingList.scss';

function BookingList() {
	const bookings = useAllBooking();

	if (bookings.length)
		return <div className="booking-list-container">{bookings?.map((b) => <BookingListItem booking={b} />)}</div>;

	return (
		<div className="booking-list-container no-content">
			<h2>예약된 컨설팅이 없습니다.</h2>
		</div>
	);
}

export default BookingList;
