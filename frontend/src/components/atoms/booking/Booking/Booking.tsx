import React, { useState } from 'react';
import './Booking.scss';

interface BookingProps {
	isActivate: boolean; // 비활성화(회색), 활성화(연두색)
	time: string; // 시간 데이터
}

function Booking(props: BookingProps) {
	const { isActivate, time } = props;
	// isActive에 따라서  연두색 or 초록색 나누어짐
	const [isActive, setIsActive] = useState(false);

	const handleButtonClick = () => {
		// 활성화(연두색)버튼이면
		if (isActivate) {
			setIsActive(!isActive);
		}
	};

	return (
		<div>
			{/* 회색 버튼 (예약할 수 없는 비활성화 버튼) */}
			{isActive ? (
				<button type="button" className="select" onClick={handleButtonClick}>
					{time}
				</button>
			) : (
				<button type="button" className={isActivate ? 'active' : 'box'} onClick={handleButtonClick}>
					{time}
				</button>
			)}
		</div>
	);
}

export default Booking;
