import ContentsLayout from 'components/layout/common/ContentsLayout/ContentsLayout';
import PageLayout from 'components/layout/common/PageLayout/PageLayout';
import NavigationLayout from 'components/layout/navigation/NavigationLayout/NavigationLayout';
import React, { ReactNode } from 'react';
import './ShopDetailPageLayout.scss';

function ShopDetailPageLayout({ children }: { children: ReactNode[] }) {
	return (
		<PageLayout>
			{/* 상단 바 */}
			<NavigationLayout>{children[0]}</NavigationLayout>
			{/* 상품 사진 */}
			<div className="product-detail-photo">{children[1]}</div>
			{/* 위와 10px 그린메이트 사진 + 이름 */}
			<ContentsLayout id="product-list-container">
				<div id="product-list">
					{children[2]}
					{children[3]}
				</div>
			</ContentsLayout>
			{children[4]}
			{/* 위와 30px 상품 디테일 정보 */}
			{/* 위와 10PX 추가적인 상품 소개 더보기 */}
			{/* 가격과 구매하기 버튼 */}
		</PageLayout>
	);
}

export default ShopDetailPageLayout;
