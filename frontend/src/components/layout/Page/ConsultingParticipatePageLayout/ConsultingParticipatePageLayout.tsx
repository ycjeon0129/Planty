import React, { ReactNode } from 'react';
import './ConsultingParticipatePageLayout.scss';
import ContentsLayout from 'components/layout/common/ContentsLayout/ContentsLayout';
import PageLayout from 'components/layout/common/PageLayout/PageLayout';
import NavigationLayout from 'components/layout/navigation/NavigationLayout/NavigationLayout';

function ConsultingParticipatePageLayout({ children }: { children: ReactNode[] }) {
	return (
		<PageLayout>
			{/* 페이지 헤더 */}
			<NavigationLayout>{children[0]}</NavigationLayout>
			{/* 상품Detail box */}
			<ContentsLayout id="participate-detail-box">
				<div>{children[1]}</div>
			</ContentsLayout>
			{/* 장비확인 text */}
			<ContentsLayout id="check-equip-text">
				<div>{children[2]}</div>
			</ContentsLayout>
			{/* 참여하기버튼 */}
			<ContentsLayout id="participate-btn">
				<div>{children[3]}</div>
			</ContentsLayout>
		</PageLayout>
	);
}
export default ConsultingParticipatePageLayout;
