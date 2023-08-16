import React from 'react';
import Lottie, { Options } from 'react-lottie'; // 타입을 가져옵니다.
import CalendarAnimation from './CalendarImg.json';

function BookingCalendar() {
	const defaultOptions: Options = {
		loop: true,
		autoplay: true,
		animationData: CalendarAnimation,
	};
	return <Lottie options={defaultOptions} height={500} width={500} />;
}

export default BookingCalendar;
