import React from 'react';
import ProductListItemLayout from 'components/layout/shop/ProductListItemLayout';
import ListItemTitle from 'components/atoms/common/ListItemTitle/ListItemTitle';
import Button from 'components/atoms/common/Button/Button';
import InfoList from 'components/organisms/common/InfoList/InfoList';
import { IProduct } from 'types/dummy';

function ProductListItem({ product }: { product: IProduct }) {
	const testFunc = () => {
		alert('클릭');
	};

	return (
		<ProductListItemLayout>
			<ListItemTitle title={product.title} url={`product/${product.pid}`} />
			<img src={product.thumbnail} alt="" />
			<InfoList info={product.info} />
			<Button isActive={false} message="구매하기" onClick={testFunc} />
		</ProductListItemLayout>
	);
}

export default ProductListItem;
