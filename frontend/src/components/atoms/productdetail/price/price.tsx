import React from 'react';
import './price.scss';
import PurchaseButton from 'components/atoms/common/PurchaseButton/PurchaseButton';
import { IProductDetail } from 'types/domain/product';

function Price({ product }: { product: IProductDetail }) {
	// 숫자를 통화 형식으로 변환
	const formattedPrice = product.price.toLocaleString();

	return (
		<div className="price-final-box">
			<div className="price">{formattedPrice} 원</div>
			<PurchaseButton spid={product.spid} product={product} />
		</div>
	);
}

export default Price;
