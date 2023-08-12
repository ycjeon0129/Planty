import React, { ReactNode } from 'react';
import './EmergencyPageLayout.scss';
import ContentsLayout from 'components/layout/common/ContentsLayout/ContentsLayout';
import PageLayout from 'components/layout/common/PageLayout/PageLayout';
import NavigationLayout from 'components/layout/navigation/NavigationLayout/NavigationLayout';

function EmergencyPageLayout({ children }: { children: ReactNode[] }) {
	return (
		<PageLayout>
			{/* 페이지 헤더 */}
			<NavigationLayout>{children[0]}</NavigationLayout>

			<div className="emergency-page-layout-container">
				{/* 현재 접속 중인 그린메이트 */}
				<ContentsLayout id="connecting-info">{children[1]}</ContentsLayout>

				{/* 이용권 정보 */}
				{children[2]}
				<ContentsLayout id="ticket-info">{children[3]}</ContentsLayout>

				{/* 응급실 이용하기 */}
				<ContentsLayout id="emergency-container">
					{children[4]}
					<div id="emergency-btn-group">
						{children[5]}
						{children[6]}
					</div>
				</ContentsLayout>
			</div>
		</PageLayout>
	);
}

export default EmergencyPageLayout;
