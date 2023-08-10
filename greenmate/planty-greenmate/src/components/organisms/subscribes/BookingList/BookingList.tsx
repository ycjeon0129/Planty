/* eslint-disable react/require-default-props */
import React from 'react';
import BookingListItem from 'components/atoms/subscribes/BookingListItem/BookingListItem';
import useAllBooking from 'hooks/api/useAllBooking';
import './BookingList.scss';
import { Value } from 'types/base/global';
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

/*
<BookingListItem
				booking={{
					cid: 0,
					date: '2023-03-08',
					greenmate: '전인혁',
					user: '김인혁',
					sid: 3,
					time: 3,
					title: '토마토 클래스',
				}}
			/>
*/
export default BookingList;
