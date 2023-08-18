import React from 'react';
import Lottie, { Options } from 'react-lottie';
import CalendarAnimation from './CalendarImg.json';
import './CalendarImg.scss'; // 스타일 파일을 불러옵니다.

function CalendarImg() {
	const defaultOptions: Options = {
		loop: true,
		autoplay: true,
		animationData: CalendarAnimation,
	};
	return (
		<div className="center-container">
			<Lottie options={defaultOptions} height={500} width={500} />
		</div>
	);
}

export default CalendarImg;
