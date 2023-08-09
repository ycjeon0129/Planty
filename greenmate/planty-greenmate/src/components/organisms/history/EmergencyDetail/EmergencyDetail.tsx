import AreaTitle from 'components/atoms/common/InfoRow/AreaTitle/AreaTitle';
import InfoRow from 'components/atoms/common/InfoRow/InfoRow';
import React from 'react';
import converTime from 'utils/converTime';
import formatDate from 'utils/formatDate';
// import useLocationIdx from 'hooks/common/useSid';
// import useEmergency from 'hooks/api/useEmergency';

function EmergencyDetail() {
	// const eid = useLocationIdx(3);
	// const emergency = useEmergency(eid);
	const emergency = {
		eid: 3,
		type: 0,
		date: '2023-03-03',
		time: 2,
		startTime: '11:00',
		endTime: '11:30',
		timeTaken: '00:30',
		user: 'jeon',
		greenmate: 'kim',
		advice: '물을 더 주세요',
	};

	return (
		<div className="emergency-detail-container">
			<AreaTitle title="응급실 컨설팅 상세보기" url="#" />
			<div id="info">
				<InfoRow title="- 컨설팅 유형" content={emergency?.type ? '화상' : '채팅'} />
				<InfoRow
					title="- 컨설팅 진행 일시"
					content={`${formatDate(emergency?.date as string) as string} ${converTime(emergency.time)}`}
				/>
				<InfoRow title="- 컨설팅 소요 시간" content={emergency?.timeTaken as string} />
				<InfoRow title="- 가드너명" content={emergency?.user as string} />
				<InfoRow title="- 가드너에게 한마디" content={emergency?.advice as string} />
			</div>
		</div>
	);
}

export default EmergencyDetail;
