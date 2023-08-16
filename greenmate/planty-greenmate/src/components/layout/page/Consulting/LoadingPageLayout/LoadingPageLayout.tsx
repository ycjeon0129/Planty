import React, { ReactNode } from 'react';
import './LoadingPageLayout.scss';
import PageLayout from 'components/layout/common/PageLayout/PageLayout';

function LoadingPageLayout({ children }: { children: ReactNode[] }) {
	return (
		<PageLayout isFullPage>
			{/* 페이지 헤더 */}
			<div id="blank">{children[0]}</div>
			{/* 응급실 서비스 box */}
			<div id="loading-center">
				<div id="title">{children[1]}</div>
				{/* 장비확인 text */}
				<div id="title-sub">{children[2]}</div>
				{/* 참여하기버튼 */}
				<div id="loading-img">{children[3]}</div>
				<div id="footer">{children[4]}</div>
				<div id="footer-sub">{children[5]}</div>
			</div>
			<div id="cancel-button">{children[6]}</div>
		</PageLayout>
	);
}
export default LoadingPageLayout;
