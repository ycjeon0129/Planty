/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import AreaTitle from 'components/atoms/common/AreaTitle/AreaTitle';
import ShopPageLayout from 'components/layout/Page/ShopPageLayout/ShopPageLayout';
import PageTitle from 'components/atoms/common/PageTitle/PageTitle';
import ShopIcon from 'assets/icons/pageTitle/ShoppingBag.svg';
import TabBarList from 'components/organisms/common/TabBar/TabBar';
import ProductListItem from 'components/organisms/shop/ProductListItem/ProductListItem';
import FilterToggleBar from 'components/organisms/shop/FilterToggleBar/FilterToggleBar';
import { IProduct } from 'types/domain/product';
import { findAllProductApi } from 'utils/api/product';

function ShopPage() {
	const [products, setProducts] = useState<IProduct[]>([]);

	const fetchData = async () => {
		const response = await findAllProductApi();

		if (response.status === 200) {
			setProducts(response.data);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	// ProductList
	const ProductList = products.map((el) => <ProductListItem key={el.spid} product={el} />);

	const test = () => {}; // 필터 클릭 시 분류
	return (
		<ShopPageLayout>
			<PageTitle icon={ShopIcon} text="구독샵" />
			<AreaTitle title="구독 상품 목록" url="#" />
			<FilterToggleBar clickFunc={test} />
			{ProductList}
			<TabBarList />
		</ShopPageLayout>
	);
}

export default ShopPage;
