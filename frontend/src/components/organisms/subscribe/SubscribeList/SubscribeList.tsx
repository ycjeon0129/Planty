import React from 'react';
import { ISubscribe } from 'types/subscribe';
import SubscribeListItem from '../SubscribeListItem/SubscribeListItem';
import './SubscribeList.scss';

function SubscribeList({ subscribes }: { subscribes: ISubscribe[] }) {
	return (
		<ul className="subscribe-list-container">
			{subscribes && subscribes.map((v) => <SubscribeListItem key={v.sid} subscribe={v} />)}
		</ul>
	);
}

export default SubscribeList;
