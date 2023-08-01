import React from 'react';
import ReservationTimeItem from 'components/atoms/common/ReservationTimeItem/ReservationTimeItem';
import TabBarLayout from 'components/layout/TabBarLayout/TabBarLayout';
import TabTest from 'components/organisms/common/TabBarList/TabTest';
import Booking from 'components/atoms/common/Booking/Booking';
import PlantyLogo from '../components/atoms/common/PlantyLogo/PlantyLogo';

function Test() {
	const Time = [
		'10:00',
		'10:30',
		'11:00',
		'11:30',
		'12:00',
		'12:30',
		'13:00',
		'13:30',
		'14:00',
		'14:30',
		'15:00',
		'15:30',
		'16:00',
		'16:30',
		'17:00',
		'17:30',
	];
	const reservationInfo: { isActivate: boolean } = {
		isActivate: true, // true, false 커스터마이징
	};
	return (
		<div>
			<div>TEST</div>
			<div className="ReservationGrid">
				{Time.map((time, index) => (
					// eslint-disable-next-line react/no-array-index-key
					<ReservationTimeItem key={index} time={time} isActivate={reservationInfo.isActivate} />
				))}
			</div>
			<TabTest />
			<Booking isActivate time="10:00" />
			<br />
			<Booking isActivate={false} time="10:00" />
			<br />
			<PlantyLogo />
			<TabBarLayout />
		</div>
	);
}

export default Test;
