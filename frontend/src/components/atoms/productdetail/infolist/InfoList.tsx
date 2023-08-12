import React from 'react';
import './InfoList.scss';
import { IProductDetailInfo } from 'types/domain/product';

function InfoList({ product }: { product: IProductDetailInfo }) {
	return (
		<div className="infolist-box">
			<div className="text-box">
				<div className="price-box">
					<span>가격</span>
					<span>{product.price.toLocaleString()} 원</span>
				</div>
				<div className="price-box ">
					<span>난이도</span>
					<span>{product.level}</span>
				</div>
				<div className="price-box ">
					<span>컨설팅 가능 횟수 </span>
					<span>{product.consultingCnt} 회</span>
				</div>
				<div className="price-box ">
					<span>영양제 제공 주기</span>
					<span>{product.tonicPeriod} 주</span>
				</div>
			</div>
		</div>
	);
}

export default InfoList;
