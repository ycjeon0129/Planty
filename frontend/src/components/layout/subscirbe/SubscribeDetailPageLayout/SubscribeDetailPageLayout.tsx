import React, { ReactNode } from 'react';
import NavigationLayout from 'components/layout/navigation/NavigationLayout/NavigationLayout';
import ContentsLayout from 'components/layout/common/ContentsLayout/ContentsLayout';

function SubscribeDetailPageLayout({ children }: { children: ReactNode[] }) {
	return (
		<>
			<NavigationLayout>{children[0]}</NavigationLayout>

			<div className="subscribe-detail-page-layout-container">
				{/* 구독 정보 */}
				<ContentsLayout id="subscribe-info">
					{children[1]}
					{children[2]}
				</ContentsLayout>

				{/* 컨설팅 정보 */}
				<ContentsLayout id="consulting-info">
					{children[1]}
					{children[2]}
				</ContentsLayout>

				{/* 온습도 정보 */}
				<ContentsLayout id="subscribe-info">
					{children[1]}
					{children[2]}
				</ContentsLayout>
			</div>
		</>
	);
}

export default SubscribeDetailPageLayout;
