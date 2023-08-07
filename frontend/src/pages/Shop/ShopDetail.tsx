import PageTitleButton from 'components/atoms/common/PageTitleButton/PageTitleButton';
import ShopDetailPageLayout from 'components/layout/Page/ShopDetailPageLayout/ShopDetailPageLayout';
import React from 'react';
import ProductIcon from 'assets/icons/product/product1.svg';
import ProductIcon2 from 'assets/icons/product/product2.svg';
import ProductImg from 'components/atoms/productdetail/productimg/ProductImg';
import { ProductDetail } from 'dummy';
import Title from 'components/atoms/productdetail/title/title';
import InfoList from 'components/atoms/productdetail/infolist/InfoList';
// import { IProduct } from 'types/dummy';
import ImgDetail from 'components/atoms/productdetail/imgdetail/ImgDetail';
import Price from 'components/atoms/productdetail/price/price';
import { useLocation } from 'react-router-dom';

function ShopDetail() {
	// 여기서 url에서 맨 오른쪽 값을 가져와서 저장한 담에 그거에 해당하는 정보를 보여다 준다.
	const pid = parseInt(useLocation().pathname.split('/')[3], 10);
	// 이미지 리스트 가져와서
	// imgUrls에 넣기
	return (
		<ShopDetailPageLayout>
			<PageTitleButton type="back" text="구독 상품 상세정보" />
			<ProductImg imgUrls={[ProductIcon, ProductIcon2]} />
			<Title title={ProductDetail[pid]} />
			<InfoList product={ProductDetail[pid]} />
			<ImgDetail />
			<Price product={ProductDetail[pid]} />
		</ShopDetailPageLayout>
	);
}

export default ShopDetail;
