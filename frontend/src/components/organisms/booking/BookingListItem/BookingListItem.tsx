import React, { useEffect, useState } from 'react';
import ListItemTitle from 'components/atoms/common/ListItemTitle/ListItemTitle';
import SubscribeStateBadge from 'components/atoms/subscribe/SubscribeStateBadge/SubscribeStateBadge';
import Button from 'components/atoms/common/Button/Button';
import InfoList from 'components/organisms/common/InfoList/InfoList';
import { IConsulting } from 'types/dummy';
import BookingListItemLayout from 'components/layout/booking/BookingListItemLayout/BookingListItemLayout';
import moment from 'moment';
import BOOKING_LIST_ITEM_LABELS from 'constants/common/Labels';

/**
 * 예약 목록 아이템
 * @param booking 예약 정보 1건
 */
function BookingListItem({ booking }: { booking: IConsulting }) {
	const [state, setState] = useState('wait');

	const testFunc = () => {
		alert('클릭');
	};

	useEffect(() => {
		if (!booking.active && !booking.cancel) {
			setState('done');
		} else if (booking.active) {
			setState('join');
		} else {
			setState('notJoin');
		}
	}, [booking]);

	return (
		<BookingListItemLayout>
			<ListItemTitle title={booking.subscribe} url={`/subscribe/${booking.sid}`} />
			<SubscribeStateBadge stateKey={state} />
			<img src={booking.thumbnail} alt="" />
			<InfoList
				info={{ consultingDate: moment(booking.date).format('YYYY-MM-DD') }}
				labels={BOOKING_LIST_ITEM_LABELS}
			/>
			<Button isActive={false} text="컨설팅 이용하기" handleClick={testFunc} />
		</BookingListItemLayout>
	);
}

export default BookingListItem;
