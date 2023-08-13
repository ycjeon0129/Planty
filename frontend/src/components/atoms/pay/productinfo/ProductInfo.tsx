/* eslint-disable global-require */
import React from 'react';
import './ProductInfo.scss';
import { IProduct } from 'types/domain/product';

/** 구독상품에 대한 데이터를 받아서 한번 더 확인시켜주는 곳
 * @params product안에는 dummyProduct가 들어간다.
 */
function ProductInfo({ product }: { product: IProduct }) {
	return (
		<div className="info-box">
			<div className="subject-text">주문 상품 정보</div>
			<div className="product-info-box">
				<div className="product-box">
					<img className="product-img" src={product.imgUrl ?? require('assets/images/defaultImage.png')} alt="이미지" />
				</div>
				<div className="text-info">
					{/* 구독개월수 */}
					<div className="gray-font-color">{product.period} 개월</div>
					{/* 구독상품명 */}
					<div className="gray-font-color">{product.name}</div>
					{/* 구독상품가격 */}
					<div className="price-info">{product.price.toLocaleString()}원</div>
				</div>
			</div>
		</div>
	);
}

export default ProductInfo;
