import React from 'react';
import './ParticipateBox.scss';
import { IConsultingParticipateInfo } from 'types/domain/consulting';
import convertTime from 'utils/common/convertTime';

/**
 * 컨설팅 참여하기 - 클래스 정보 box
 */
function ParticipateBox({ consultingParticipateInfo }: { consultingParticipateInfo: IConsultingParticipateInfo }) {
	return (
		<div className="participate-box">
			{consultingParticipateInfo && (
				<>
					<div className="participate-title">{consultingParticipateInfo.title}</div>

					<div className="participate-detail">
						<div className="left">
							<div>그린메이트</div>
							<div>컨설팅 일시</div>
						</div>
						<div className="right">
							<div>{consultingParticipateInfo.greenmate}</div>
							<div>
								{consultingParticipateInfo.date} / {convertTime(consultingParticipateInfo.time)}
							</div>
							<div />
						</div>
					</div>
				</>
			)}
		</div>
	);
}

export default ParticipateBox;
