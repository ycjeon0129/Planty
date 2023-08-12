import PageTitleButton from 'components/atoms/common/PageTitleButton/PageTitleButton';
import ShopDetailPageLayout from 'components/layout/Page/ShopDetailPageLayout/ShopDetailPageLayout';
import React from 'react';
import ProductImg from 'components/atoms/productdetail/productimg/ProductImg';
import { ProductDetail } from 'dummy';
import Title from 'components/atoms/productdetail/title/title';
import InfoList from 'components/atoms/productdetail/infolist/InfoList';
import ImgDetail from 'components/atoms/productdetail/imgdetail/ImgDetail';
import Price from 'components/atoms/productdetail/price/price';
import { IProductDetailInfo } from 'types/domain/product';
// import { useParams } from 'react-router-dom';

function ShopDetail() {
	// const {spid} = useParams();
	const product: IProductDetailInfo = {
		price: ProductDetail.price,
		level: ProductDetail.level,
		consultingCnt: ProductDetail.consultingCnt,
		tonicPeriod: ProductDetail.tonicPeriod,
	};

	return (
		<ShopDetailPageLayout>
			<PageTitleButton type="back" text="구독 상품 상세정보" />
			<ProductImg imgUrls={[ProductDetail.imgUrl, ProductDetail.imgUrl]} />
			<Title name={ProductDetail.name} greenmate={ProductDetail.greenmate} />
			<InfoList product={product} />
			<ImgDetail descImgUrl={ProductDetail.description} />
			<Price price={ProductDetail.price} spid={ProductDetail.spid} />
		</ShopDetailPageLayout>
	);
}

export default ShopDetail;
