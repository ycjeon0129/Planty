import React from 'react';
import './SubscribesList.scss';
import useAllSubscribe from 'hooks/api/useAllSubscribe';
import SubscribesListItem from 'components/atoms/subscribes/SubscribesListItem/SubscribesListItem';

function SubscribesList() {
	const subscribes = useAllSubscribe();

	if (subscribes.length)
		return (
			<div className="subscribes-list-container">{subscribes?.map((s) => <SubscribesListItem subscribe={s} />)}</div>
		);

	return (
		<div className="subscribes-list-container no-content">
			<h2>현재 진행중인 구독이 없습니다.</h2>
		</div>
	);
}

export default SubscribesList;
