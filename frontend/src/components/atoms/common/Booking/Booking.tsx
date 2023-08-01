import React, { useState } from 'react';
import './Booking.scss'; // 스타일 파일을 불러옵니다.

interface BookingProps {
	isActivate: boolean;
	time: string;
}

function Booking(props: BookingProps) {
	const { isActivate, time } = props;
	const [isActive, setIsActive] = useState(false);

	const handleButtonClick = () => {
		if (isActivate) {
			setIsActive(!isActive); // isActive 값을 토글합니다.
		}
	};

	return (
		<div>
			{/* 회색 버튼 (예약할 수 없는 비활성화 버튼) */}
			{isActive ? (
				// div가 아닌 버튼으로 바꿀 것
				<div className="select" onClick={handleButtonClick} role="presentation">
					<p>{time}</p>
				</div>
			) : (
				<div className={isActivate ? 'active' : 'box'} onClick={handleButtonClick} role="presentation">
					<p>{time}</p>
				</div>
			)}
		</div>
	);
}

export default Booking;
