import React from 'react';
import './BookingList.scss';
import useBookingList from 'hooks/useBookingList';
import { Value } from 'types/global';
import { dummyBookings } from 'dummy';
import EmptyItem from 'components/atoms/common/EmptyItem/EmptyItem';
import isSameDate from 'utils/isSameDate';
import BookingListItem from '../BookingListItem/BookingListItem';

/**
 * 예약내역 조회를 원하는 날짜(date)에 해당하는 예약(컨설팅) 목록을 출력.
 * @param date 예약 내역 조회를 원하는 날짜 (Date)
 */
function BookingList({ date }: { date: Value }) {
	let listElement;

	// 서버로부터 받아온 예약(컨설팅) 목록
	const bookings = useBookingList({ date });
	console.log(bookings);

	// dummyBookings를 서버에서 가져온 데이터라고 가정.
	const bookingsTest = dummyBookings.filter((el) => isSameDate(date as Date, el.date));

	// if (bookings.length) {
	if (bookingsTest.length) {
		listElement = (
			<ul>
				{bookingsTest.map((booking) => (
					<BookingListItem key={booking.cid} booking={booking} />
				))}
			</ul>
		);
	} else {
		listElement = <EmptyItem text={`해당 날짜에\n예약된 일정이 없습니다.`} />;
	}
	return <div className="booking-list-container">{listElement}</div>;
}

export default BookingList;
