import BookingListItem from 'components/atoms/subscribes/BookingListItem/BookingListItem';
import useAllBookingBySpid from 'hooks/api/useAllBookingBySpid';
import useLocationIdx from 'hooks/common/useSid';
import React from 'react';

function SubscribeBookingList() {
	const spid = useLocationIdx(4);
	const bookings = useAllBookingBySpid(spid).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

	if (bookings.length)
		return (
			<div className="subscribe-booking-list-container">
				{bookings.map((b) => (
					<BookingListItem key={b.cid} booking={b} />
				))}
			</div>
		);
	return (
		<div className="subscribe-booking-list-container no-content">
			<h2>예약된 컨설팅이 없습니다.</h2>
		</div>
	);
}

export default SubscribeBookingList;
