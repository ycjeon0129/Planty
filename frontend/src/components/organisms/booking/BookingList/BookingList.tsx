/* eslint-disable react/require-default-props */
import React, { useEffect, useState } from 'react';
import './BookingList.scss';
import EmptyItem from 'components/atoms/common/EmptyItem/EmptyItem';
import useAllBooking from 'hooks/useAllBooking';
import { IBooking } from 'types/domain/booking';
import { useRecoilState } from 'recoil';
import selectedDateState from 'recoil/booking';
import formatDate from 'utils/date/formatDate';
import BookingListItem from '../BookingListItem/BookingListItem';

/**
 * 컨설팅 예약 목록 출력
 * @returns 컨설팅 예약 목록이 있다면 컨설팅 예약 목록
 */
function BookingList() {
	let listElement;
	const allBookings = useAllBooking(); // 서버로부터 받아온 예약 목록
	const [selectedDate] = useRecoilState(selectedDateState); // 현재 캘린더 상에서 선택된 날짜
	const [bookings, setBookings] = useState<IBooking[]>([]); // 현재 날짜를 기준으로 필터링 된 예약 목록을 출력

	useEffect(() => {
		setBookings(allBookings.filter((b) => b.date === formatDate(selectedDate) && !b.cancel));
	}, [allBookings, selectedDate]);

	// 예약 건이 하나 이상 있다면, 예약 목록출력
	if (bookings.length) {
		listElement = (
			<ul>
				{bookings.map((booking) => (
					<BookingListItem key={booking.cid} booking={booking} />
				))}
			</ul>
		);
	}
	// 예약 건이 없다면 빈요소 출력
	else {
		listElement = <EmptyItem text={`해당 날짜에\n예약된 일정이 없습니다.`} />;
	}

	return <div className="booking-list-container">{listElement}</div>;
}

export default BookingList;
