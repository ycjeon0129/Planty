import React from 'react';
import './InfoRow.scss';

function InfoRow({ title, content }: { title: string; content: string | number }) {
	return (
		<div className="info-row">
			<div className="info-title">{title}</div>
			<div className="info-content">{content}</div>
		</div>
	);
}

export default InfoRow;
