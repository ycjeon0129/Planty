import React from 'react';
import GreenMate from 'assets/icons/Greenmate.svg';
import './title.scss';
// import { dummyProduct } from 'dummy';
import { IProduct } from 'types/dummy';

function title({ product }: { product: IProduct }) {
	return (
		<div>
			<div className="big-box">
				<img src={GreenMate} alt="그린메이트" />
				<div className="gm-name">GM이름</div>
			</div>
			<div>타이틀 이름</div>
			<div>{product.title}</div>
			<div>{product.info.price}</div>
			<div>{product.info.level}</div>
			{/* <div>{product.info.consultCount}</div>
			<div>{product.info.target}</div>
			<div>{product.info.startDate}</div> */}
		</div>
	);
}

export default title;
