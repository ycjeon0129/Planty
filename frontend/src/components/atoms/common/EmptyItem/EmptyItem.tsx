import React from 'react';
import './EmptyItem.scss';

function EmptyItem({ text }: { text: string }) {
	return <div className="empty-item-container">{text}</div>;
}

export default EmptyItem;
