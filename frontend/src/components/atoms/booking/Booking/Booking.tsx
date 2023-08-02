import React, { useState } from 'react';
import './Booking.scss';

interface BookingProps {
	isActivate: boolean;
	time: string;
}

function Booking(props: BookingProps) {
	const { isActivate, time } = props;
	const [isActive, setIsActive] = useState(false);

	const handleButtonClick = () => {
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
