import React from 'react';
import './InfoList.scss';
import { IProductDetail } from 'types/domain/product';

function InfoList({ product }: { product: IProductDetail }) {
	return (
		<div className="infolist-box">
			<div className="text-box">
				<div className="price-box ">
					<span>담당 그린메이트</span>
					<span>{product.greenmate}</span>
				</div>
				<div className="price-box ">
					<span>구독에 포함된 식물</span>
					<span>{product.plantName}</span>
				</div>
				<div className="price-box ">
					<span>생육 난이도</span>
					<span>{product.level} / 5</span>
				</div>
				<div className="price-box ">
					<span>포함된 컨설팅 횟수 </span>
					<span>{product.consultingCnt} 회</span>
				</div>
				<div className="price-box">
					<span>가격</span>
					<span>{product.price.toLocaleString()} 원</span>
				</div>
				<div className="price-box">
					<span>상세설명</span>
					<span>{product.description} 원</span>
				</div>
			</div>
		</div>
	);
}

export default InfoList;
