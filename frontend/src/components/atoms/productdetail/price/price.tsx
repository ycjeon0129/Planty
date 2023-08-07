import React from 'react';
import './price.scss';
import PurchaseButton from 'components/atoms/common/PurchaseButton/PurchaseButton';
import { IProductDetail } from 'types/dummy';

function Price({ product }: { product: IProductDetail }) {
	// 숫자를 통화 형식으로 변환
	const formattedPrice = product.info.price.toLocaleString();

	return (
		<div className="price-final-box">
			<div className="price">{formattedPrice}원</div>
			<PurchaseButton pid={product.pid} />
		</div>
	);
}

export default Price;
