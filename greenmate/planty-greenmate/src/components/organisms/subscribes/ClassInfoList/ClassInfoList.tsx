import React from 'react';
import './ClassInfoList.scss';
import useAllSubscribe from 'hooks/api/useAllSubscribe';
// import ClassInfo from 'components/atoms/ClassInfo/ClassInfo';
import SubscribesListItem from 'components/atoms/subscribes/SubscribesListItem/SubscribesListItem';

function ClassInfoList() {
	const subscribes = useAllSubscribe();

	if (subscribes.length) {
		return (
			<div>
				{subscribes.map((s) => (
					<SubscribesListItem key={s.sid} subscribe={s} handleClick={() => {}} />
				))}
			</div>
		);
	}

	return (
		<div className="subscribes-list-container no-content">
			<div>현재 구독한 상품이 없습니다.</div>
		</div>
	);
}

export default ClassInfoList;
