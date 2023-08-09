import React from 'react';
import Img2 from 'assets/icons/Next.svg';
import './ClassReservation.scss';

function ClassReservation({ img }: { img: string }) {
	const isClicked = () => {
		alert('이동');
	};
	return (
		<div className="class-reservation-box">
			<div className="class-reservation-inner-box1">
				<div className="img-box">
					<img src={img} alt="그린메이트 사진" />
				</div>
				<div>
					<div className="bold-text">컨설팅 날짜 및 시간</div>
					<div className="gray-text">구독상품 타이틀</div>
					<div className="gray-text">사용자이름</div>
				</div>
			</div>
			<div className="class-reservation-inner-box2">
				<div>
					<img src={Img2} alt="img" onClick={isClicked} aria-hidden />
				</div>
			</div>
		</div>
	);
}

export default ClassReservation;
