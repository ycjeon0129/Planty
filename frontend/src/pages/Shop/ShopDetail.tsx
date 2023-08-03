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

function ShopDetail() {
	// 이미지 리스트 가져와서
	// imgUrls에 넣기
	return (
		<ShopDetailPageLayout>
			<PageTitleButton type="back" text="이전으로" />
			<ProductImg imgUrls={[ProductIcon, ProductIcon2]} />
			<Title />
			<InfoList product={ProductDetail[0]} />
			<ImgDetail />
		</ShopDetailPageLayout>
	);
}

export default ShopDetail;
