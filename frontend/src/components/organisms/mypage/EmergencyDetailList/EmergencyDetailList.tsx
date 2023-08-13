import React from 'react';
import './EmergencyDetailList.scss';
import { IEmergencyHistory } from 'types/domain/Emergency';
import EmergencyDetail from '../EmergencyDetail/EmergencyDetail';

function EmergencyDetailList({ list }: { list: IEmergencyHistory[] | null }) {
	if (list) {
		return (
			<ul className="emergency-detail-list-container">
				{list.map((c) => (
					<EmergencyDetail key={c.eid} data={c} />
				))}
			</ul>
		);
	}
	return null;
}

export default EmergencyDetailList;
