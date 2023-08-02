import React, { ReactNode } from 'react';
import './LoadingPageLayout.scss';

/**
 * LoadingPageLayout 구성하는 레이아웃
 * @param children 레이아웃을 구성하는 컴포넌트들 ( Planty로고 / 소셜 로그인 버튼 )
 */
function LoadingPageLayout({ children }: { children: ReactNode }) {
	return (
		<div className="loading-page-layout-container">
			{/* 로고 */}
			{children}
		</div>
	);
}

export default LoadingPageLayout;
