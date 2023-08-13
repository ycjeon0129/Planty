/* eslint-disable global-require */
import React, { useEffect, useState } from 'react';
import './SubscribesListItem.scss';
import { ISubscribe } from 'types/subscribe';
import Next from 'assets/icons/Next.svg';
import classNames from 'classnames';
import useLocationIdx from 'hooks/common/useSid';

function SubscribesListItem({ subscribe, handleClick }: { subscribe: ISubscribe; handleClick: () => void }) {
	const [active, setActive] = useState(false);

	const className = classNames('subscribes-list-item-container', { active });
	const sid = useLocationIdx(3);

	useEffect(() => {
		if (sid === subscribe.sid) setActive(true);
		else setActive(false);
	}, [subscribe, sid]);

	return (
		<div className={className} onClick={handleClick} role="presentation">
			<div id="thumbnail">
				<img src={subscribe?.thumbnail ?? require('assets/images/defaultImage.png')} alt="img" />
			</div>
			<div id="info">
				<h3>{subscribe.name}</h3>
				<p>{subscribe.subscriberCnt}명의 구독자</p>
				{/* <p>
					{subscribe.startDate} ~ {subscribe.endDate}
				</p> */}
			</div>
			<div id="next-button">
				<div>
					<img src={Next} alt="img" aria-hidden />
				</div>
			</div>
		</div>
	);
}

export default SubscribesListItem;
