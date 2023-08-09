import React from 'react';
import './ClassInfo.scss';
import Img from 'assets/icons/Next.svg';

interface ClassInfoProps {
	img: string;
	title: string;
	date: string;
}

function ClassInfo({ img, title, date }: ClassInfoProps) {
	// 구독자 수 고려
	const isClicked = () => {
		alert('이동');
	};
	return (
		<div className="class-info-box">
			<div className="class-info-inner-box1">
				<div className="img-box">
					<img src={img} alt="그린메이트 사진" />
				</div>
				<div>
					<div className="bold-text">{title}</div>
					<div className="gray-text">구독자명수</div>
					<div className="gray-text">{date}</div>
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
