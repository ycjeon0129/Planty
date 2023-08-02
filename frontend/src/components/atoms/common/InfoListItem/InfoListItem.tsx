import React, { ReactNode } from 'react';
import './InfoListItem.scss';

/**
 * 구독, 상품 등의 정보를 나타내는 아이템. ex) 가격 3,000원
 * @param children 항목
 * @param children 값
 */
function InfoListItem({ children }: { children: ReactNode[] }) {
	return (
		<div className="info-list-item">
			{children[0]}
			{children[1]}
		</div>
	);
}

export default InfoListItem;
