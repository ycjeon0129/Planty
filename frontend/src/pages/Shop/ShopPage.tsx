import React from 'react';
import AreaTitle from 'components/atoms/common/AreaTitle/AreaTitle';
import ShopPageLayout from 'components/layout/Page/ShopPageLayout/ShopPageLayout';

function ShopPage() {
	return (
		<ShopPageLayout>
			<AreaTitle title="구독 상품 목록" url="#" />
			<div>Filter Component</div>
			<div>ProductList Component</div>
		</ShopPageLayout>
	);
}

export default ShopPage;
