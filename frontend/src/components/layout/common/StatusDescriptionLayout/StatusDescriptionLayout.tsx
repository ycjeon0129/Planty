import React, { ReactNode } from 'react';
import './StatusDescriptionLayout.scss';

function StatusDescriptionLayout({ children }: { children: ReactNode[] }) {
	return (
		<div className="badge-description-layout-container">
			{/* 타이틀 */}
			{children[0]}

			{/* 설명 */}
			<div>{children[1]}</div>

			{/* 뱃지 목록 */}
			<div id="subscribe-badge-list-container">{children[2]}</div>
		</div>
	);
}

export default StatusDescriptionLayout;
