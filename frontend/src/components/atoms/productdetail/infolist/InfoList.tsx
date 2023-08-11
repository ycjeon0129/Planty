import React from 'react';
import './InfoList.scss';
import { IProductDetail } from 'types/domain/product';

function InfoList({ product }: { product: IProductDetail }) {
	return (
		<div className="infolist-box">
			<div className="text-box">
				<div className="price-box">
					<span>가격 :</span>
					<span>{product.info.price.toLocaleString()}원</span>
				</div>
				<div className="price-box ">
					<span>대상자 :</span>
					<span>{product.info.target}</span>
				</div>
				<div className="price-box ">
					<span>컨설팅 가능 횟수 : </span>
					<span>{product.info.consultCount}</span>
				</div>
				<div className="price-box ">
					<span>키트 구성품 :</span>
					<span>{product.info.kitTool}</span>
				</div>
			</div>
		</div>
	);
}

export default InfoList;
