import React, { ReactNode } from 'react';
import './InfoListItem.scss';

function InfoListItem({ children }: { children: ReactNode[] }) {
	return (
		<div className="info-list-item">
			{children[0]}
			{children[1]}
		</div>
	);
}

export default InfoListItem;
