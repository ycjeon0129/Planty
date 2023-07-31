import React from 'react';
import './InfoListItem.scss';

function InfoListItem({ title, value }: { title: string; value: string }) {
	return (
		<div className="info-list-item">
			<span>{title}</span>
			<span>{value}</span>
		</div>
	);
}

export default InfoListItem;
