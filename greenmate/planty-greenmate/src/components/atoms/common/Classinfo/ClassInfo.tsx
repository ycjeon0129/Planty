import React from 'react';
import './ClassInfo.scss';
import { ISubscribe } from 'types/subscribe';
import Img from 'assets/icons/Next.svg';

function ClassInfo({ subscribe, handleClick }: { subscribe: ISubscribe; handleClick: () => void }) {
	return (
		<div className="class-info-box" onClick={handleClick} role="presentation">
			<div className="class-info-inner-box1">
				<div className="img-box">
					<img src={subscribe.thumbnail} alt="그린메이트 사진" />
				</div>
				<div>
					<div className="bold-text">{subscribe.name}</div>
					<div className="gray-text">{subscribe.subscriberCnt} 명의 구독자</div>
				</div>
			</div>
			<div className="class-info-inner-box2">
				<img src={Img} alt="img" onClick={() => {}} aria-hidden />
			</div>
		</div>
	);
}

export default ClassInfo;
