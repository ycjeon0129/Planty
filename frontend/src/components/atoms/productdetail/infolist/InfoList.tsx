import React from 'react';
import { IProduct } from 'types/dummy';

function InfoList({ product }: { product: IProduct }) {
	return (
		<div>
			<div>{product.title}</div>
			{/* <div>{product.otherPhoto}</div> */}
			<div>{product.title}</div>
		</div>
	);
}

export default InfoList;
