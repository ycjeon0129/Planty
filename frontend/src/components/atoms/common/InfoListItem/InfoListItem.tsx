import React from 'react';
import './InfoListItem.scss';

function InfoListItem({ title, idx, values }: { title: string; idx: number; values: string[] }) {
	return (
		<div className="info-list-item">
			<span>{title}</span>
			<span>{values[idx]} </span>
		</div>
	);
}

export default InfoListItem;
