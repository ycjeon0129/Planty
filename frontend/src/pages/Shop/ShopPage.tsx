/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import AreaTitle from 'components/atoms/common/AreaTitle/AreaTitle';
import ShopPageLayout from 'components/layout/Page/ShopPageLayout/ShopPageLayout';
import PageTitle from 'components/atoms/common/PageTitle/PageTitle';
import ShopIcon from 'assets/icons/pageTitle/ShoppingBag.svg';
import TabBarList from 'components/organisms/common/TabBar/TabBar';
import ProductListItem from 'components/organisms/shop/ProductListItem/ProductListItem';
import FilterToggleBar from 'components/organisms/shop/FilterToggleBar/FilterToggleBar';
import useIsLoading from 'hooks/useIsLoading';
import useProduct from 'hooks/useProduct';

/**
 * 구독샵 페이지
 * 필터 파라미터
 * 전체: 0
 * 실내: place=1
 * 실외: place=2
 * 식용: eatable=1
 * 비식용: eatable=0
 */
function ShopPage() {
	const { products, fetchData } = useProduct();
	const isLoading = useIsLoading(products);
	// const [selected, setSelected] = useState<number>(0);

	if (isLoading) {
		return <div>로딩중</div>;
	}

	const test = (idx: number) => {
		fetchData(idx);
	}; // 필터 클릭 시 분류

	return (
		<ShopPageLayout>
			<PageTitle icon={ShopIcon} text="구독샵" />
			<AreaTitle title="구독 상품 목록" url="#" />
			<FilterToggleBar clickFunc={test} />
			{products && products.map((v) => <ProductListItem key={v.spid} product={v} />)}
			<TabBarList />
		</ShopPageLayout>
	);
}

export default ShopPage;
