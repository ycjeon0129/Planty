import React, { ReactNode } from 'react';
import './HomePageLayout.scss';
import ContentsLayout from '../ContentsLayout/ContentsLayout';
import PageLayout from '../PageLayout/PageLayout';

function HomePageLayout({ children }: { children: ReactNode[] }) {
	return (
		<PageLayout>
			<div className="home-page-layout-container">
				{/* 배너 */}
				<ContentsLayout id="banner">{children[0]}</ContentsLayout>
				{/* 내 구독정보 */}
				<ContentsLayout id="my-subcribe">
					{children[1]}
					{children[2]}
				</ContentsLayout>
				{/* 바로가기 메뉴 */}
				{children[3]}
				<ContentsLayout id="menu">
					<div id="booking">{children[4]}</div>
					<div id="emergency">
						<div>{children[5]}</div>
						<div>{children[6]}</div>
					</div>
				</ContentsLayout>
				{/* 추천 구독 상품 */}
				{children[7]}
				<ContentsLayout id="shop">
					<div />
				</ContentsLayout>
			</div>
		</PageLayout>
	);
}

export default HomePageLayout;
