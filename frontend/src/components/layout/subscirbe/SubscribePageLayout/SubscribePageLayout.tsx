import React, { ReactNode } from 'react';
import './SubscribePageLayout.scss';
import PageLayout from 'components/layout/common/PageLayout/PageLayout';
import NavigationLayout from 'components/layout/navigation/NavigationLayout/NavigationLayout';
import ContentsLayout from 'components/layout/common/ContentsLayout/ContentsLayout';

function SubscribePageLayout({ children }: { children: ReactNode[] }) {
	return (
		<PageLayout>
			{/* 페이지 헤더 */}
			<NavigationLayout>{children[0]}</NavigationLayout>

			<div className="subscribe-list-page-layout-container">
				{/* 컨설팅 상태 뱃지 설명 */}
				<ContentsLayout id="connecting-badge-info">{children[1]}</ContentsLayout>

				{/* 구독 목록 */}
				<ContentsLayout id="subscribe-list">{children[2]}</ContentsLayout>
			</div>
		</PageLayout>
	);
}

export default SubscribePageLayout;
