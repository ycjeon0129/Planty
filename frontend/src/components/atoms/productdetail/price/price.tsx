import React from 'react';
import './price.scss';
import PurchaseButton from 'components/atoms/common/PurchaseButton/PurchaseButton';

function Price({ price, spid }: { price: number; spid: number }) {
	// 숫자를 통화 형식으로 변환
	const formattedPrice = price.toLocaleString();

	return (
		<div className="price-final-box">
			<div className="price">{formattedPrice} 원</div>
			<PurchaseButton pid={spid} />
		</div>
	);
}

export default Price;
