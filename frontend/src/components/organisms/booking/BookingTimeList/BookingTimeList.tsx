import React from 'react';
import './BookingTimeList.scss';
import Booking from 'components/atoms/booking/Booking/Booking';

function BookingTimeList({
	selectTime,
	setSelectTime,
	timeTextList,
	timeStatusList,
}: {
	selectTime: number;
	setSelectTime: React.Dispatch<React.SetStateAction<number>>;
	timeTextList: string[];
	timeStatusList: boolean[];
}) {
	return (
		<ul className="grid-container">
			{timeStatusList.map((v, idx) => (
				<Booking
					key={timeTextList[idx]}
					time={timeTextList[idx]}
					idx={idx}
					isCanSelect={v}
					selectTime={selectTime}
					setSelectTime={setSelectTime}
				/>
			))}
		</ul>
	);
}

export default BookingTimeList;
