/* eslint-disable global-require */
import React from 'react';
import ProductListItemLayout from 'components/layout/shop/ProductListItemLayout/ProductListItemLayout';
import ListItemTitle from 'components/atoms/common/ListItemTitle/ListItemTitle';
import Button from 'components/atoms/common/Button/Button';
import InfoList from 'components/organisms/common/InfoList/InfoList';
import { PRODUCT_LIST_ITEM_LABELS } from 'constants/common/Labels';
import { IProduct, IProductInfo } from 'types/domain/product';
import useMovePage from 'hooks/useMovePage';

/**
 * 구독샵 상품 목록 아이템의 모음
 * @param product 상품 정보들을 담고 있는 객체
 */
function ProductListItem({ product }: { product: IProduct }) {
	const { movePage } = useMovePage();
	const info: IProductInfo = { period: product.period, level: product.level, price: product.price };

	const handleClick = () => {
		movePage(`/shop/detail/${product.spid}`, null);
	};

	return (
		<ProductListItemLayout>
			<ListItemTitle title={product.name} url={`detail/${product.spid}`} />
			<img src={product.imgUrl ?? require('assets/images/defaultImage.png')} alt={product.plantName} />
			<InfoList info={info} labels={PRODUCT_LIST_ITEM_LABELS} />
			<Button isActive text="자세히 보기" handleClick={handleClick} />
		</ProductListItemLayout>
	);
}

export default ProductListItem;
