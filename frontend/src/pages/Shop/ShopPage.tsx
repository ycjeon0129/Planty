import React from 'react';
import AreaTitle from 'components/atoms/common/AreaTitle/AreaTitle';
import ShopPageLayout from 'components/layout/Page/ShopPageLayout/ShopPageLayout';
import PageTitle from 'components/atoms/common/PageTitle/PageTitle';
import ShopIcon from 'assets/icons/pageTitle/ShoppingBag.svg';
import TabBarList from 'components/organisms/common/TabBar/TabBar';
import ProductListItem from 'components/organisms/shop/ProductListItem/ProductListItem';
import { dummyProduct } from 'dummy';
import FilterToggleBar from 'components/organisms/shop/FilterToggleBar/FilterToggleBar';

function ShopPage() {
	// dummyProduct의 길이를 사용하여 리스트를 생성 즉, 데이터 갯수만큼
	const productList = Array.from(Array(dummyProduct.length), (_, index) => (
		<ProductListItem key={index} product={dummyProduct[index]} />
	));
	const test = () => {}; // 필터 클릭 시 분류
	return (
		<ShopPageLayout>
			<PageTitle icon={ShopIcon} text="구독샵" />
			<AreaTitle title="구독 상품 목록" url="#" />
			<FilterToggleBar clickFunc={test} />
			{productList}
			<TabBarList />
		</ShopPageLayout>
	);
}

export default ShopPage;

// import React from 'react';
// import AreaTitle from 'components/atoms/common/AreaTitle/AreaTitle';
// import ShopPageLayout from 'components/layout/Page/ShopPageLayout/ShopPageLayout';
// import PageTitle from 'components/atoms/common/PageTitle/PageTitle';
// import ShopIcon from 'assets/icons/pageTitle/ShoppingBag.svg';
// import TabBarList from 'components/organisms/common/TabBar/TabBar';
// import ProductListItem from 'components/organisms/shop/ProductListItem/ProductListItem';
// import { dummyProduct } from 'dummy';

// function ShopPage() {
// 	// dummyProduct의 각 요소에서 title 속성을 추출하여 화면에 보이게 합니다.
// 	const productList = dummyProduct.map((product) => (
// 		<ProductListItem key={product.pid} product={product} />
// 	));

// 	return (
// 		<ShopPageLayout>
// 			<PageTitle icon={ShopIcon} text="구독샵" />
// 			<AreaTitle title="구독 상품 목록" url="#" />
// 			<div>Filter Component</div>
// 			{productList}
// 			<TabBarList />
// 		</ShopPageLayout>
// 	);
// }

// export default ShopPage;
