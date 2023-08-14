/* eslint-disable react/require-default-props */
import React, { useEffect, useState } from 'react';
import './EmergencyListItem.scss';
import { IEmergency } from 'types/history';
import formatDate from 'utils/formatDate';
import Next from 'assets/icons/Next.svg';
import classNames from 'classnames';
import useLocationIdx from 'hooks/common/useSid';

function EmergencyListItem({ emergency, handleClick }: { emergency: IEmergency; handleClick: () => void }) {
	const [active, setActive] = useState(false);
	const className = classNames('emergency-list-item-container', { active });
	const eid = useLocationIdx(4);

	useEffect(() => {
		if (eid === emergency.eid) setActive(true);
		else setActive(false);
	}, [emergency, eid]);

	return (
		<div className={className} onClick={handleClick} role="presentation">
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
