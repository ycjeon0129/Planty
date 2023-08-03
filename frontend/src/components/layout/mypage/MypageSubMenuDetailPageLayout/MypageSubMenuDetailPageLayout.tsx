import React, { ReactNode } from 'react';
import './MypageSubMenuDetailPageLayout.scss';
import PageLayout from 'components/layout/common/PageLayout/PageLayout';
import NavigationLayout from 'components/layout/navigation/NavigationLayout/NavigationLayout';
import ContentsLayout from 'components/layout/common/ContentsLayout/ContentsLayout';

function MypageSubMenuDetailPageLayout({ children }: { children: ReactNode[] }) {
	return (
		<PageLayout>
			<NavigationLayout>{children[0]}</NavigationLayout>
			<div className="mypage-submenu-detail-page-layout-container">
				<ContentsLayout id="detail-list-wrap">{children[1]}</ContentsLayout>
			</div>
		</PageLayout>
	);
}

export default MypageSubMenuDetailPageLayout;
