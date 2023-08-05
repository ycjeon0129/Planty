import React, { useCallback } from 'react';
import './Booking.scss';
// import classNames from 'classnames';

interface BookingProps {
	selectTime: number;
	setSelectTime: React.Dispatch<React.SetStateAction<number>>;
	idx: number;
	isCanSelect: boolean; // 비활성화(회색), 활성화(연두색)
	time: string; // 시간 데이터
}

function Booking(props: BookingProps) {
	const { isCanSelect, time, idx, selectTime, setSelectTime } = props;

	const handleButtonClick = useCallback(
		(clickBtnIdx: number) => {
			setSelectTime(clickBtnIdx);
		},
		[setSelectTime],
	);

	return (
		<li className="grid-item">
			{/* 선택할 수 있는 버튼 */}
			{isCanSelect ? (
				<button
					type="button"
					className={selectTime === idx ? 'select' : 'active'}
					onClick={() => {
						handleButtonClick(idx);
					}}
				>
					{time}
				</button>
			) : (
				<button type="button" className="box">
					{time}
				</button>
			)}
		</li>
	);
}

export default Booking;
