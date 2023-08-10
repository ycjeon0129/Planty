import React from 'react';
import Img2 from 'assets/icons/Next.svg';
import './ConsultingReservation.scss';
import formatDate from 'utils/formatDate';
import greenp from 'assets/icons/GreenP.svg';

export interface IBooking {
	cid: number;
	sid: number;
	date: string;
	time: number;
	greenmate: string;
	user: string;
	title: string;
}

function ConsultingReservationItem({ booking }: { booking: IBooking }) {
	const fomatedDate = formatDate(booking.date);
	const isClicked = () => {
		alert('이동');
	};
	return (
		<div className="class-reservation-box">
			<div className="class-reservation-inner-box1">
				<div className="img-box">
					<img src={greenp} alt="그린메이트 사진" />
				</div>
				<div>
					<div>
						<div className="bold-text">{fomatedDate}</div>
					</div>
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

export default ConsultingReservationItem;
