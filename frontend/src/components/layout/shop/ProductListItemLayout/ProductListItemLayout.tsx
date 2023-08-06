import './ProductListItemLayout.scss';

import React, { ReactNode } from 'react';

/**
 * 구독샵 상품 목록 아이템을 구성하는 레이아웃
 * @param children 레이아웃을 구성하는 컴포넌트들 ( ListItemTitle / img / InfoList / 기본버튼(Button) )
 */
function ProductListItemLayout({ children }: { children: ReactNode[] }) {
	return (
		<div className="product-list-item-layout">
			{/* 제목 */}
			<div id="top">{children[0]}</div>
			<div id="bottom">
				{/* 이미지 */}
				{children[1]}
				<div id="right">
					{/* 구독 정보 */}
					<div id="leaf">{children[2]}</div>
					{/* 버튼 */}
					<div id="button">{children[3]}</div>
				</div>
			</div>
		</div>
	);
}

export default ProductListItemLayout;
