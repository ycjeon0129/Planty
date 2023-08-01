import React from 'react';
import InfoListItem from 'components/atoms/common/InfoListItem/InfoListItem';

function InfoList({ info }: { info: object }) {
	const keys = Object.keys(info);
	const values = Object.values(info);

	return (
		<div className="info-list-container">
			{keys.map((title, idx) => (
				<InfoListItem>
					<span>{title}</span>
					<span>{values[idx]}</span>
				</InfoListItem>
			))}
		</div>
	);
}

export default InfoList;
