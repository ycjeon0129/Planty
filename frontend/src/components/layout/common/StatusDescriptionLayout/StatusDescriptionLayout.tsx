import React, { ReactNode } from 'react';
import './StatusDescriptionLayout.scss';

function StatusDescriptionLayout({ children }: { children: ReactNode[] }) {
	return (
		<div className="badge-description-layout-container">
			{/* 타이틀 */}
			{children[1]}

			{/* 설명 */}
			<div id="subscribe-badge-list-container">{children[2]}</div>

			{/* 뱃지 목록 */}
			<div id="subscribe-badge-list-container">{children[3]}</div>
		</div>
	);
}

export default StatusDescriptionLayout;
