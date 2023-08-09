import React, { useEffect, useState } from 'react';
import './SubscribesListItem.scss';
import { ISubscribe } from 'types/subscribe';
import moment from 'moment';
import classNames from 'classnames';
import useLocationIdx from 'hooks/common/useSid';

function SubscribesListItem({ subscribe, handleClick }: { subscribe: ISubscribe; handleClick: () => void }) {
	const today = moment(new Date()).format('YYYY-MM-DD');
	const [active, setActive] = useState(false);

	const className = classNames('subscribes-list-item-container', { active });
	const sid = useLocationIdx(3);

	useEffect(() => {
		if (sid === subscribe.sid) setActive(true);
		else setActive(false);
	}, [subscribe, sid]);

	return (
		<div className={className} onClick={handleClick} role="presentation">
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
