import React, { ReactNode } from 'react';
import './SubscribeListPageLayout.scss';
import NavigationLayout from 'components/layout/navigation/NavigationLayout/NavigationLayout';
import ContentsLayout from 'components/layout/common/ContentsLayout/ContentsLayout';

function SubscribeListPageLayout({ children }: { children: ReactNode[] }) {
	return (
		<>
			{/* 페이지 헤더 */}
			<NavigationLayout>{children[0]}</NavigationLayout>

			<div className="subscribe-list-page-layout-container">
				{/* 컨설팅 상태 뱃지 설명 */}
				<ContentsLayout id="connecting-badge-info">
					{children[1]}
					{children[2]}
					<div id="subscribe-badge-list-container">{children[3]}</div>
				</ContentsLayout>

				{/* 구독 목록 */}
				<ContentsLayout id="subscribe-list">{children[4]}</ContentsLayout>
			</div>
		</>
	);
}

export default SubscribeListPageLayout;
