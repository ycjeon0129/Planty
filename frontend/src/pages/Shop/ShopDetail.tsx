import PageTitle from 'components/atoms/common/PageTitle/PageTitle';
import ShopDetailPageLayout from 'components/layout/Page/ShopDetailPageLayout/ShopDetailPageLayout';
import React from 'react';
import BackIcon from 'assets/icons/Back.svg';
import ProductIcon from 'assets/icons/product/product1.svg';
import ProductIcon2 from 'assets/icons/product/product2.svg';
import ProductImg from 'components/atoms/productdetail/productimg/ProductImg';
import Title from 'components/atoms/productdetail/title/Title';

function ShopDetail() {
	return (
		<ShopDetailPageLayout>
			<PageTitle icon={BackIcon} text="이전으로" />
			<ProductImg imgUrls={[ProductIcon, ProductIcon2]} />
			<Title />
			<div>4</div>
		</ShopDetailPageLayout>
	);
}

export default ShopDetail;
