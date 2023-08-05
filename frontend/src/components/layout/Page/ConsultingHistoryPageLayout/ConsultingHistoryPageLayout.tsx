import React, { ReactNode } from 'react';
import './ConsultingHistoryPageLayout.scss';
import PageLayout from 'components/layout/common/PageLayout/PageLayout';
import ContentsLayout from 'components/layout/common/ContentsLayout/ContentsLayout';
import NavigationLayout from '../../navigation/NavigationLayout/NavigationLayout';

function ConsultingHistoryPageLayout({ children }: { children: ReactNode[] }) {
	return (
		<PageLayout>
			{/* 페이지 헤더 */}
			<NavigationLayout>{children[0]}</NavigationLayout>

			<div className="consulting-history-page-layout">
				{/* 구독 상품명 */}
				<div id="subscribe-name">{children[1]}</div>

				{/* 진행 내역 뱃지 설명 */}
				<ContentsLayout id="badge-description">{children[2]}</ContentsLayout>

				{/* 컨설팅 내역 */}
				<ContentsLayout id="consulting-list">{children[3]}</ContentsLayout>
			</div>
		</PageLayout>
	);
}

export default ConsultingHistoryPageLayout;
