import React from 'react';
import './InfoList.scss';

function InfoList({ info }: { info: object }) {
	const keys = Object.keys(info);
	const values = Object.values(info);

	return (
		<div className="info-list-container">
			{keys.map((el, idx) => (
				<div className="info-list-item">
					<span>{el}</span>
					<span>{values[idx]} </span>
				</div>
			))}
		</div>
	);
}

export default InfoList;
