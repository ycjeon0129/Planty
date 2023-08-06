import ContentsLayout from 'components/layout/common/ContentsLayout/ContentsLayout';
import PageLayout from 'components/layout/common/PageLayout/PageLayout';
import NavigationLayout from 'components/layout/navigation/NavigationLayout/NavigationLayout';
import React, { ReactNode } from 'react';
import './ShopPayPageLayout.scss';

function ShopPayPageLayout({ children }: { children: ReactNode[] }) {
	return (
		<PageLayout>
			{/* 상단 바 : 꺽새 이전으로 */}
			<NavigationLayout>{children[0]}</NavigationLayout>
			{/* 주문/결제 글자 */}
			<div className="product-detail-photo">{children[1]}</div>
			{/* 주문자정보 */}
			<div id="product-list">{children[2]}</div>
			{/* 배송지주소 */}
			<div id="product-list">{children[3]}</div>
			{/* 주문 상품 정보  */}
			<div id="product-list">{children[4]}</div>
			{/* 결제 금액 확인 */}
			<ContentsLayout id="">{children[5]}</ContentsLayout>
			<ContentsLayout id="">{children[6]}</ContentsLayout>
		</PageLayout>
	);
}

export default ShopPayPageLayout;
