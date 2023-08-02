import React, { ReactNode } from 'react';
import './ShopPageLayout.scss';
import PageLayout from 'components/layout/PageLayout/PageLayout';
import NavigationLayout from 'components/layout/NavigationLayout/NavigationLayout';
import ContentsLayout from 'components/layout/ContentsLayout/ContentsLayout';
import ShopIcon from 'assets/icons/pageTitle/ShoppingBag.svg';
import PageTitle from 'components/atoms/common/PageTitle/PageTitle';

function ShopPageLayout({ children }: { children: ReactNode[] }) {
	return (
		<PageLayout>
			<NavigationLayout>
				<PageTitle icon={ShopIcon} text="구독샵" />
			</NavigationLayout>

			<div className="shop-page-layout-container">
				{/* 구독 상품 목록(제목, 필터, 목록) */}
				<ContentsLayout id="product-list-container">
					{children[0]}
					<div id="product-list">
						{children[1]}
						{children[2]}
					</div>
				</ContentsLayout>
			</div>
		</PageLayout>
	);
}

export default ShopPageLayout;
