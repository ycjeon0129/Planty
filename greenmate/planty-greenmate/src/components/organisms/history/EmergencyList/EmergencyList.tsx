import React from 'react';
import './EmergencyList.scss';
import EmergencyListItem from 'components/atoms/history/EmergencyListItem/EmergencyListItem';
import useAllEmergency from 'hooks/api/useAllEmergency';
import useMovePage from 'hooks/useMovePage';

function EmergencyList() {
	const emergencies = useAllEmergency();
	const { movePage } = useMovePage();

	if (emergencies.length)
		return (
			<div className="emergency-list-container">
				{emergencies?.map((e) => (
					<EmergencyListItem key={e.eid} emergency={e} handleClick={() => movePage(`${e.eid}`)} />
				))}
			</div>
		);

	return (
		<div className="emergency-list-container no-content">
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
					date: '2023-03-08',
					time: 2,
					startTime: '15:00',
					endTime: '15:30',
					timeTaken: '00:30',
					user: 'ㅋㅋㅋㅋ누구게',
					greenmate: '그린메이트당',
					advice: '물을 더 주세요 물을 더 주세요물을 더 주세요물을 더 주세요물을 더 주세요',
				}}
				handleClick={() => movePage('0')}
			/>
			<EmergencyListItem
				emergency={{
					eid: 2,
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
				handleClick={() => movePage('2')}
			/>
\ */
