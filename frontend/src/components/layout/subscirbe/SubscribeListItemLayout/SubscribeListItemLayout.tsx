import './SubscribeListItemLayout.scss';

import React, { ReactNode } from 'react';

function SubscribeItemLayout({ children }: { children: ReactNode[] }) {
	return (
		<div className="subscribe-list-item-layout">
			{/* 제목 & 구독상태뱃지 */}
			<div id="top">
				{children[0]}
				{children[1]}
			</div>
			<div id="bottom">
				{children[2]}
				<div>
					{children[3]}
					{children[4]}
				</div>
			</div>
		</div>
	);
}

export default SubscribeItemLayout;
