import React from 'react';
import './PayCheck.scss';
import { IProduct } from 'types/domain/product';

function PayCheck({ product }: { product: IProduct }) {
	return (
		<div className="info-box">
			<div className="subject-text">결제 금액 확인</div>
			<div className="final-price-box">
				<div className="black-font-color">총 상품 금액</div>
				<div className="gray-font-color">{product.info.price.toLocaleString()}원</div>
			</div>
			<div className="final-price-box">
				<div className="black-font-color">배송비</div>
				<div className="gray-font-color">무료</div>
			</div>
			<hr className="custom-hr" />
			<div className="final-price-box">
				<div className="black-font-color">총 결제 금액</div>
				<div className="black-font-color">{product.info.price.toLocaleString()}원</div>
			</div>
		</div>
	);
}

export default PayCheck;
