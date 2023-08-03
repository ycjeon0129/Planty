import React from 'react';
import './BookingList.scss';
import useBookingList from 'hooks/useBookingList';
import { Value } from 'types/global';
import dummySubscribe from 'dummy';
import EmptyItem from 'components/atoms/common/EmptyItem/EmptyItem';
import SubscribeList from '../subscribe/SubscribeList/SubscribeList';

/**
 * 예약내역 조회를 원하는 날짜(date)에 해당하는 예약(컨설팅) 목록을 출력.
 * @param date 예약 내역 조회를 원하는 날짜 (Date)
 */
function BookingList({ date }: { date: Value }) {
	const bookings = useBookingList({ date });
	let listElement = <div />;

	if (bookings.length) {
		listElement = <SubscribeList subscribes={dummySubscribe} />;
	} else {
		listElement = <EmptyItem text={`해당 날짜에\n예약된 일정이 없습니다.`} />;
	}
	return <div className="booking-list-container">{listElement}</div>;
}

export default BookingList;
