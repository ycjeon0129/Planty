import React, { ReactNode } from 'react';
import './HomePageLayout.scss';
import NavigationLayout from 'components/layout/navigation/NavigationLayout/NavigationLayout';
import ContentsLayout from '../../common/ContentsLayout/ContentsLayout';
import PageLayout from '../../common/PageLayout/PageLayout';

/**
 * HomePage를 구성하는 레이아웃
 * @param children 레이아웃을 구성하는 컴포넌트들 ( 배너 / AreaTitle / 구독Slider / AreaTitle / 예약버튼 / 응급실-채팅 버튼 / 응급실-화상 버튼 / AreaTitle )
 */
function HomePageLayout({ children }: { children: ReactNode[] }) {
	return (
		<PageLayout>
			<NavigationLayout>{children[0]}</NavigationLayout>

			<div className="home-page-layout-container">
				{/* 배너 */}
				<ContentsLayout id="banner">{children[1]}</ContentsLayout>
				{/* 내 구독정보 */}
				<ContentsLayout id="my-subcribe">
					{children[2]}
					{children[3]}
				</ContentsLayout>
				{/* 바로가기 메뉴 */}
				{children[4]}
				<ContentsLayout id="menu">
					<div id="booking">{children[5]}</div>
					<div id="emergency">
						<div>{children[6]}</div>
						<div>{children[7]}</div>
					</div>
				</ContentsLayout>
			</div>
		</PageLayout>
	);
}

export default HomePageLayout;
