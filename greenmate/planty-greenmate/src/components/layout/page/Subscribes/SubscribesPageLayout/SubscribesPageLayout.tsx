import React, { ReactNode } from 'react';
import PageLayout from 'components/layout/common/PageLayout/PageLayout';
import './SubscribesPageLayout.scss';

function SubscribesPageLayout({ children }: { children: ReactNode[] }) {
	return (
		<PageLayout>
			<div className="subscribe-page-layout-container">
				{/* 헤더 */}
				{children[0]}
				{/* 페이지 버튼 그룹 */}
				{children[1]}
				{/* 페이지 컴포넌트 */}
				{children[2]}
			</div>
		</PageLayout>
	);
}

export default SubscribesPageLayout;
