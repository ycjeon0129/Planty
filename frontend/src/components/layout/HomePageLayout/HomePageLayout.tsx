import React, { ReactNode } from 'react';
import './HomePageLayout.scss';

function HomePageLayout({ children }: { children: ReactNode[] }) {
	return (
		<div className="home-page-layout-container">
			{/* 배너 */}
			<div id="banner">{children[0]}</div>
			{/* 내 구독정보 */}
			<div id="my-subcribe">
				{children[1]}
				{children[2]}
			</div>
			{/* 바로가기 메뉴 */}
			<div id="menu">
				<div id="booking">{children[3]}</div>
				<div id="emergency">
					{children[4]}
					{children[5]}
				</div>
			</div>
			{/* 추천 구독 상품 */}
		</div>
	);
}

export default HomePageLayout;
