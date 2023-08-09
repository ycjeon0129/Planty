import React from 'react';
import './EmergencyList.scss';
import EmergencyListItem from 'components/atoms/history/EmergencyListItem/EmergencyListItem';
import useAllEmergency from 'hooks/api/useAllEmergency';

function EmergencyList() {
	const emergencies = useAllEmergency();

	if (emergencies.length)
		return (
			<div className="subscribes-list-container">{emergencies?.map((e) => <EmergencyListItem emergency={e} />)}</div>
		);

	return (
		<div className="subscribes-list-container no-content">
			<h2>응급실 컨설팅 내역이 없습니다.</h2>
		</div>
	);
}

export default EmergencyList;

/*
<EmergencyListItem
				emergency={{
					eid: 0,
					type: 0,
					date: '2023-03-03',
					time: 2,
					startTime: '11:00',
					endTime: '11:30',
					timeTaken: '00:30',
					user: 'jeon',
					greenmate: 'kim',
					advice: '물을 더 주세요',
				}}
			/>
\ */
