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
			{/* 타이틀 */}
			<ContentsLayout id="area-title">{children[1]}</ContentsLayout>
			<ContentsLayout id="lottie">{children[2]}</ContentsLayout>
			{/* 상품Detail box */}
			<ContentsLayout id="participate-detail-box">
				<div>{children[3]}</div>
			</ContentsLayout>
			{/* 장비확인 text */}
			<ContentsLayout id="check-equip-text">
				<div>{children[4]}</div>
			</ContentsLayout>
			{/* 참여하기버튼 */}
			<ContentsLayout id="participate-btn">
				<div>{children[5]}</div>
			</ContentsLayout>
		</PageLayout>
	);
}
export default ConsultingParticipatePageLayout;
