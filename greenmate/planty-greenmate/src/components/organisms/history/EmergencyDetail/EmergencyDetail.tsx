import InfoRow from 'components/atoms/common/InfoRow/InfoRow';
import React from 'react';
import formatDate from 'utils/formatDate';
import './EmergencyDetail.scss';
import AreaTitle from 'components/atoms/common/AreaTitle/AreaTitle';
import useLocationIdx from 'hooks/common/useSid';
import useEmergency from 'hooks/api/useEmergency';
import { IEmergency } from 'types/history';

function EmergencyDetail() {
	const eid = useLocationIdx(4);
	const emergency: IEmergency = useEmergency(eid) as IEmergency;
	if (emergency) {
		console.log(emergency);
		return (
			<div className="emergency-detail-container">
				<AreaTitle title="응급실 컨설팅 상세보기" url="#" />
				<div id="info">
					<InfoRow title="- 컨설팅 유형" content={emergency?.type ? '화상' : '채팅'} />
					<InfoRow
						title="- 컨설팅 진행 일시"
						content={`${formatDate(emergency?.date as string) as string} ${emergency.startTime} ~ ${emergency.endTime}`}
					/>
					<InfoRow title="- 컨설팅 소요 시간" content={emergency?.timeTaken as string} />
					<InfoRow title="- 가드너명" content={emergency?.user as string} />
					<InfoRow title="- 가드너에게 한마디" content={emergency?.content as string} />
				</div>
			</div>
		);
	}

	return <div />;
}

export default EmergencyDetail;
