import React, { ReactNode } from 'react';
import './ShopPageLayout.scss';
import PageLayout from 'components/layout/common/PageLayout/PageLayout';
import NavigationLayout from 'components/layout/navigation/NavigationLayout/NavigationLayout';
import ContentsLayout from 'components/layout/common/ContentsLayout/ContentsLayout';

function ShopPageLayout({ children }: { children: ReactNode[] }) {
	return (
		<PageLayout>
			<NavigationLayout>{children[0]}</NavigationLayout>

			<div className="shop-page-layout-container">
				{/* 구독 상품 목록(제목, 필터, 목록) */}
				<ContentsLayout id="product-list-container">
					{children[1]}
					<div id="product-list">
						{children[2]}
						{children[3]}
					</div>
				</ContentsLayout>
			</div>
		</PageLayout>
	);
}

export default ShopPageLayout;
