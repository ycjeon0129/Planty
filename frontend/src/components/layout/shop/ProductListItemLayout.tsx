import './ProductListItemLayout.scss';

import React, { ReactNode } from 'react';

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
					<div>{children[2]}</div>
					{/* 버튼 */}
					{children[3]}
				</div>
			</div>
		</div>
	);
}

export default ProductListItemLayout;
