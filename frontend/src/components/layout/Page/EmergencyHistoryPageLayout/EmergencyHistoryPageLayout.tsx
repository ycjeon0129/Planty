import React, { ReactNode } from 'react';
import './EmergencyHistoryPageLayout.scss';
import PageLayout from 'components/layout/common/PageLayout/PageLayout';
import NavigationLayout from 'components/layout/navigation/NavigationLayout/NavigationLayout';
import ContentsLayout from 'components/layout/common/ContentsLayout/ContentsLayout';

function EmergencyHistoryPageLayout({ children }: { children: ReactNode[] }) {
	return (
		<PageLayout>
			{/* 페이지 헤더 */}
			<NavigationLayout>{children[0]}</NavigationLayout>

			<div className="emergency-history-page-layout">
				{/* 구독 상품명 */}
				<div id="subscribe-name">{children[1]}</div>

				{/* 진행 내역 뱃지 설명 */}
				<ContentsLayout id="badge-description">{children[2]}</ContentsLayout>

				{/* 컨설팅 내역 */}
				<ContentsLayout id="emergency-list">{children[3]}</ContentsLayout>
			</div>
		</PageLayout>
	);
}

export default EmergencyHistoryPageLayout;
