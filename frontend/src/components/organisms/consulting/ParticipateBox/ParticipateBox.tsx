import React from 'react';
import './ParticipateBox.scss';
import useSid from 'hooks/subscribes/useSid';
import useSubscribe from 'hooks/subscribes/useSubscribe';

/**
 * 컨설팅 참여하기 - 클래스 정보 box
 */
function ParticipateBox() {
	const sid = useSid(); // TODO : 현재 url (/consulting/participate) 에서는 sid를 얻어올 수 없음. 수정 필요
	const subscribe = useSubscribe(sid);

	return (
		<div className="participate-box">
			<div>{subscribe?.title}</div>
			<div className="participate-thumbnail">
				<img src={subscribe?.thumbnail} alt="" />
			</div>
			<div className="participate-plantname">{subscribe?.plant}</div>

			<div className="participate-detail">
				<div className="left">
					<div>담당 그린 메이트</div>
					<div>컨설팅 횟수</div>
					<div>컨설팅 일시</div>
				</div>
				<div className="right">
					<div>{subscribe?.greenmate}</div>
					<div>{subscribe?.info.consultingCnt}</div>
					<div>{subscribe?.info.consultingDate}</div>
				</div>
			</div>
		</div>
	);
}

export default ParticipateBox;
