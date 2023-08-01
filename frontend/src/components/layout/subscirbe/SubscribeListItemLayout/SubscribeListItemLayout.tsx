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
				{/* 이미지 */}
				{children[2]}
				<div id="right">
					{/* 구독 정보 */}
					<div>{children[3]}</div>
					{/* 버튼 */}
					{children[4]}
				</div>
			</div>
		</div>
	);
}

export default SubscribeItemLayout;
