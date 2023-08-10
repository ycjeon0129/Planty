import React from 'react';
import './SubscribesList.scss';
import useAllSubscribe from 'hooks/api/useAllSubscribe';
import SubscribesListItem from 'components/atoms/subscribes/SubscribesListItem/SubscribesListItem';
import useMovePage from 'hooks/useMovePage';

function SubscribesList() {
	const subscribes = useAllSubscribe();
	const { movePage } = useMovePage();

	if (subscribes.length) {
		return (
			<div className="subscribes-list-container">
				{subscribes.map((s) => (
					<SubscribesListItem key={s.spid} subscribe={s} handleClick={() => movePage(`/subscribes/list/${s.spid}`)} />
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

/*
			<SubscribesListItem
				subscribe={{
					title: '토마토 클래스',
					sid: 1,
					thumbnail: '',
					startDate: '2023-05-03',
					endDate: '2023-06-03',
					subscriberCnt: 7,
				}}
				handleClick={() => movePage('1')}
			/>
			<SubscribesListItem
				subscribe={{
					title: '토마토 클래스',
					sid: 3,
					thumbnail: '',
					startDate: '2023-05-03',
					endDate: '2023-06-03',
					subscriberCnt: 7,
				}}
				handleClick={() => movePage('3')}
			/>
*/
export default SubscribesList;
