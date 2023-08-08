import React from 'react';
import './ParticipateBox.scss';
import { dummySubscribeDetail } from 'dummy';

/**
 * 컨설팅 참여하기 - 클래스 정보 box
 */
function ParticipateBox() {
	return (
		<div className="participate-box">
			<div>{dummySubscribeDetail.title}</div>
			<div className="participate-thumbnail">
				<img src={dummySubscribeDetail.thumbnail} alt="" />
			</div>
			<div className="participate-plantname">{dummySubscribeDetail.plantName}</div>

			<div className="participate-detail">
				<div className="left">
					<div>담당 그린 메이트</div>
					<div>컨설팅 횟수</div>
					<div>컨설팅 일시</div>
				</div>
				<div className="right">
					<div>{dummySubscribeDetail.detailInfo.GMNickname}</div>
					<div>{dummySubscribeDetail.info.consultCount}</div>
					<div>{dummySubscribeDetail.info.consultDate}</div>
				</div>
			</div>
		</div>
	);
}

export default ParticipateBox;
