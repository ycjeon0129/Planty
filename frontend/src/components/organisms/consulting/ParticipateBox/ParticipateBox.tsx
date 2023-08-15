import React from 'react';
import './ParticipateBox.scss';
import { ISubscribeDetail } from 'types/domain/subscribe';

/**
 * 컨설팅 참여하기 - 클래스 정보 box
 */
function ParticipateBox({ subscribe }: { subscribe: ISubscribeDetail }) {
	return (
		<div className="participate-box">
			{subscribe && (
				<>
					<div>{subscribe.title}</div>
					<div className="participate-thumbnail">
						<img src={subscribe.thumbnail} alt="" />
					</div>
					<div className="participate-plantname">{subscribe.plant}</div>

					<div className="participate-detail">
						<div className="left">
							<div>담당 그린 메이트</div>
							<div>컨설팅 횟수</div>
							<div>컨설팅 일시</div>
						</div>
						<div className="right">
							<div>{subscribe.greenmate}</div>
							<div>{subscribe.info.consultingCnt}</div>
							<div>{subscribe.info.consultingDate}</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
}

export default ParticipateBox;
