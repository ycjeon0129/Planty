import React from 'react';
import './ReservationTimeItem.scss';

// 시간과 isActivate를 props로 받는다
interface Reserve {
	time: string;
	isActivate: boolean;
}

function ReservationTimeItem(props: Reserve) {
	// 구조분해해서 활용
	const { time, isActivate } = props;
	// isActivate가 True면 연두색 false면 회색
	const backgroundStyle = isActivate ? { background: '#E8FFE0' } : { background: '#f7f7f7' };

	return (
		<div className="TimeBox" style={backgroundStyle}>
			<p>{time}</p>
		</div>
	);
}

export default ReservationTimeItem;
