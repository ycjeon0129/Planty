import PageTitle from 'components/atoms/common/PageTitle/PageTitle';
import ShopDetailPageLayout from 'components/layout/Page/ShopDetailPageLayout/ShopDetailPageLayout';
import React from 'react';
import BackIcon from 'assets/icons/Back.svg';
import ProductImg from 'assets/icons/product/product1.svg';
import Product from 'components/atoms/Product/Product';

function ShopDetail() {
	return (
		<ShopDetailPageLayout>
			<PageTitle icon={BackIcon} text="이전으로" />
			<Product imgUrl={ProductImg} />
			<div>3</div>
			<div>4</div>
		</ShopDetailPageLayout>
	);
}

export default ShopDetail;
