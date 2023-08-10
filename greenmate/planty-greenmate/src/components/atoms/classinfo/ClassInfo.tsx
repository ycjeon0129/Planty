import React from 'react';
import './ClassInfo.scss';
import { ISubscribe } from 'types/subscribe';
import Img from 'assets/icons/Next.svg';
import formatDate from 'utils/formatDate';
import moment from 'moment';
// import Img2 from 'assets/icons/product/product1.svg';
// import { ISubscribe } from 'types/subscribe';

function ClassInfo({ subscribe }: { subscribe: ISubscribe }) {
	// startDate <= 현재날짜 <= endDate 안에 있으면 1
	const formattedStartdate = formatDate(subscribe.startDate);
	const formattedEnddate = formatDate(subscribe.endDate);
	const today = moment(new Date()).format('YYYY-MM-DD');
	// 버튼 클릭시 이동
	const isClicked = () => {
		alert('이동');
	};
	return (
		<div className="class-info-box">
			<div className="class-info-inner-box1">
				<div className="img-box">
					<img src={subscribe.thumbnail} alt="그린메이트 사진" />
				</div>
				<div>
					<div className="bold-text">{subscribe.title}</div>
					<div className="gray-text">{subscribe.subscriberCnt} 명의 구독자</div>
					<div className="date-box">
						<div className="gray-text">{formattedStartdate}</div>
						<div className="gray-text">~</div>
						<div className="gray-text">{formattedEnddate}</div>
					</div>
				</div>
			</div>
			<div className="class-info-inner-box2">
				<div>{moment(subscribe.endDate).isAfter(today) ? '진행중' : '종료'}</div>
				<img src={Img} alt="img" onClick={isClicked} aria-hidden />
			</div>
		</div>
	);
}

export default ClassInfo;
