import PageTitleButton from 'components/atoms/common/PageTitleButton/PageTitleButton';
import ShopDetailPageLayout from 'components/layout/Page/ShopDetailPageLayout/ShopDetailPageLayout';
import React, { useEffect, useState } from 'react';
import ProductImg from 'components/atoms/productdetail/productimg/ProductImg';
import Title from 'components/atoms/productdetail/title/title';
import InfoList from 'components/atoms/productdetail/infolist/InfoList';
import ImgDetail from 'components/atoms/productdetail/imgdetail/ImgDetail';
import Price from 'components/atoms/productdetail/price/price';
import { IProductDetail } from 'types/domain/product';
import { findProductBySpidApi } from 'utils/api/product';
import { useParams } from 'react-router-dom';

const defaultImg =
	'https://i.namu.wiki/i/7CrIrJaPPWRwMaCfZhyjVpjXBL5c7_Nn_lGZBQ-R3JNh_59xwZA92LllKCpGx1yti4Bxn1bt13-GH4ee_8llUA.webp';
const defaultDetailImg =
	'https://thumbnail8.coupangcdn.com/thumbnails/remote/q89/image/retail/images/715188549854504-0eec4459-46be-444d-836a-7cc57cf7f5ff.jpg';

function ShopDetail() {
	const { spid } = useParams();
	const [product, setProduct] = useState<IProductDetail>();

	const fetchData = async (reqSpid: number) => {
		try {
			const response = await findProductBySpidApi(reqSpid);
			if (response.status === 200) {
				setProduct(response.data);
			}
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchData(+(spid as string));
	}, [spid]);

	if (product)
		return (
			<ShopDetailPageLayout>
				<PageTitleButton type="back" text="구독 상품 상세정보" />
				<ProductImg
					imgUrls={[product.imgUrl ? product.imgUrl : defaultImg, product.imgUrl ? product.imgUrl : defaultImg]}
				/>
				<Title name={product.name} />
				<InfoList product={product as IProductDetail} />
				<ImgDetail descImgUrl={defaultDetailImg} />
				<Price product={product} />
			</ShopDetailPageLayout>
		);
	return <div />;
}

export default ShopDetail;
