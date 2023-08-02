import React from 'react';
import AreaTitle from 'components/atoms/common/AreaTitle/AreaTitle';
import ShopPageLayout from 'components/layout/Page/ShopPageLayout/ShopPageLayout';
import PageTitle from 'components/atoms/common/PageTitle/PageTitle';
import ShopIcon from 'assets/icons/pageTitle/ShoppingBag.svg';

function ShopPage() {
	return (
		<ShopPageLayout>
			<PageTitle icon={ShopIcon} text="구독샵" />
			<AreaTitle title="구독 상품 목록" url="#" />
			<div>Filter Component</div>
			<div>ProductList Component</div>
		</ShopPageLayout>
	);
}

export default ShopPage;
