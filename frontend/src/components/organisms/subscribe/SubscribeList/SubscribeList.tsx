import React from 'react';
import dummySubscribe from '../../../../dummy';
import SubscribeListItem from '../SubscribeListItem/SubscribeListItem';
import './SubscribeList.scss';

function SubscribeList() {
	return (
		<ul className="subscribe-list-container">
			{dummySubscribe.map((v) => (
				<SubscribeListItem subscribe={v} />
			))}
		</ul>
	);
}

export default SubscribeList;
