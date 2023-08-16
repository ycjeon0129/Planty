import './SubscribeListItemLayout.scss';

import React, { ReactNode } from 'react';

/**
 * 구독 목록 아이템을 구성하는 레이아웃
 * @param children 레이아웃을 구성하는 컴포넌트들 ( ListItemTitle /구독상태뱃지 / img / InfoList / 기본버튼(Button) )
 * @returns
 */
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
				</div>
			</div>
			{children[4]}
		</div>
	);
}

export default SubscribeItemLayout;
