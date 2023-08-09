import React from 'react';
import './EmergencyListItem.scss';
import { IEmergency } from 'types/history';
import formatDate from 'utils/formatDate';
import Next from 'assets/icons/Next.svg';
import useMovePage from 'hooks/useMovePage';

function EmergencyListItem({ emergency }: { emergency: IEmergency }) {
	const { movePage } = useMovePage();
	return (
		<div className="emergency-list-item-container" onClick={() => movePage(`${emergency.eid}`)} role="presentation">
			<div id="type">{emergency.type ? '화상' : '채팅'}</div>
			<div id="info">
				<h3 id="date-time">
					{formatDate(emergency.date)} {emergency.startTime} ~ {emergency.endTime}
				</h3>
				<div id="user">{emergency.user}님</div>
			</div>
			<div id="next">
				<img src={Next} alt="img" aria-hidden />
			</div>
		</div>
	);
}

export default EmergencyListItem;
