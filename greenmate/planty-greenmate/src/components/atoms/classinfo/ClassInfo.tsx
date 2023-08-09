import React from 'react';
import './ClassInfo.scss';
import { ISubscribe } from 'types/subscribe';
import Img from 'assets/icons/Next.svg';
import formatDate from 'utils/formatDate';

function ClassInfo({ thumbnail, title, subscriberCnt, startDate, endDate }: ISubscribe) {
	// startDate <= 현재날짜 <= endDate 안에 있으면 1
	const formattedStartdate = formatDate(startDate);
	const formattedEnddate = formatDate(endDate);
	// 현재 날짜를 받는다
	// const currentDate = new Date();
	// 현재날짜를 2023-02-02 (수) 형태로 변환한다.
	// const formattedCurrentDate = formatDate(currentDate);
	// const year
	const isClicked = () => {
		alert('이동');
	};
	return (
		<div className="class-info-box">
			<div className="class-info-inner-box1">
				<div className="img-box">
					<img src={thumbnail} alt="그린메이트 사진" />
				</div>
				<div>
					<div className="bold-text">{title}</div>
					<div className="gray-text">{subscriberCnt} 명의 구독자</div>
					<div className="date-box">
						<div className="gray-text">{formattedStartdate}</div>
						<div className="gray-text">~</div>
						<div className="gray-text">{formattedEnddate}</div>
					</div>
				</div>
			</div>
			<div className="class-info-inner-box2">
				<div className="green-text">진행중</div>
				<img src={Img} alt="img" onClick={isClicked} aria-hidden />
			</div>
		</div>
	);
}

export default ClassInfo;
