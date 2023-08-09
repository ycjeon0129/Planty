import React from 'react';
import './SubscribesListItem.scss';
import { ISubscribe } from 'types/subscribe';
import moment from 'moment';

function SubscribesListItem({ subscribe }: { subscribe: ISubscribe }) {
	const today = moment(new Date()).format('YYYY-MM-DD');

	return (
		<div className="subscribes-list-item-container">
			<img src={subscribe.thumbnail} alt="img" />
			<div>
				<h3>{subscribe.title}</h3>
				<p>{subscribe.subscriberCnt}명의 구독자</p>
				<p>
					{subscribe.startDate} ~ {subscribe.endDate}
				</p>
			</div>
			<div>{moment(subscribe.endDate).isAfter(today) ? '진행중' : '종료'}</div>
		</div>
	);
}

export default SubscribesListItem;
