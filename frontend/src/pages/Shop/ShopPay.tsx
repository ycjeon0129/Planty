import React from 'react';
import ShopPayPageLayout from 'components/layout/Page/ShopPayPageLayout/ShopPayPageLayout';
import PageTitleButton from 'components/atoms/common/PageTitleButton/PageTitleButton';
import AreaTitle from 'components/atoms/common/AreaTitle/AreaTitle';
import PayUserInfoBox from 'components/organisms/shop/PayUserInfoBox/PayUserInfoBox';
import Address from 'components/atoms/pay/address/Address';
// import PurchaseButton from 'components/atoms/common/PurchaseButton/PurchaseButton';
import ProductInfo from 'components/atoms/pay/productinfo/ProductInfo';
import BuyerInfo from 'components/atoms/pay/buyerinfo/BuyerInfo';
import { dummyProduct } from 'dummy';
import PayCheck from 'components/atoms/pay/paycheck/PayCheck';
import EndButton from 'components/atoms/pay/endbutton/EndButton';
import { useLocation } from 'react-router-dom';

/** 고객 관려 데이터 받아오기 ( 이름, 이메일, 주소, 구매상품, 전화번호)
 *  @params 고객데이터 전체 넣어주기
 */
function ShopPay() {
	const pid = parseInt(useLocation().pathname.split('/')[3], 10);
	return (
		<ShopPayPageLayout>
			<PageTitleButton type="back" text="이전으로" />
			<AreaTitle title="주문/결제" url="#" />
			<PayUserInfoBox text="주문자 정보">
				<BuyerInfo info="김싸피" />
				<BuyerInfo info="ssafy@ssafy.com" />
			</PayUserInfoBox>
			<Address address="광주광역시 광산구 하남산단 6번로 107" name="김싸피" phone="01012345678" />
			<ProductInfo product={dummyProduct[pid]} />
			<PayCheck product={dummyProduct[pid]} />
			<EndButton />
		</ShopPayPageLayout>
	);
}

export default ShopPay;
