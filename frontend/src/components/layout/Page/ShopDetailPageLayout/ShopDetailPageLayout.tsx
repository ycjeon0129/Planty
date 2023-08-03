import ContentsLayout from 'components/layout/common/ContentsLayout/ContentsLayout';
import PageLayout from 'components/layout/common/PageLayout/PageLayout';
import NavigationLayout from 'components/layout/navigation/NavigationLayout/NavigationLayout';
import React, { ReactNode } from 'react';

function ShopDetailPageLayout({ children }: { children: ReactNode[] }) {
	return (
		<PageLayout>
			{/* 상단 바 */}
			<NavigationLayout>{children[0]}</NavigationLayout>
			{/* 상품 사진 */}
			<div className="product-detail-photo">{children[1]}</div>
			<ContentsLayout id="product-list-container">
				<div id="product-list">
					{children[2]}
					{children[3]}
				</div>
			</ContentsLayout>
		</PageLayout>
	);
}

export default ShopDetailPageLayout;
