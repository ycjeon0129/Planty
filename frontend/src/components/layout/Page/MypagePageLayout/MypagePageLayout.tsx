import React, { ReactNode } from 'react';
import './MypagePageLayout.scss';
import ContentsLayout from 'components/layout/common/ContentsLayout/ContentsLayout';
import PageLayout from 'components/layout/common/PageLayout/PageLayout';
import NavigationLayout from 'components/layout/navigation/NavigationLayout/NavigationLayout';

function MypagePageLayout({ children }: { children: ReactNode[] }) {
	return (
		<PageLayout>
			{/* 페이지 헤더 */}
			<NavigationLayout>{children[0]}</NavigationLayout>

			<div className="mypage-page-layout-container">
				{/* 내 정보(img, 닉네임) */}
				<ContentsLayout id="profile-info-container">{children[1]}</ContentsLayout>

				{/* 마이페이지 메뉴 목록 */}
				{/* 메인 메뉴 */}
				<ContentsLayout id="main-menu-wrap">
					{children[2]}
					{children[3]}
				</ContentsLayout>
				{/* 서브 메뉴 */}
				<ContentsLayout id="sub-menu-wrap">{children[4]}</ContentsLayout>
			</div>
		</PageLayout>
	);
}

export default MypagePageLayout;
