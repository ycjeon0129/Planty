import React from 'react';
import ShopPayPageLayout from 'components/layout/Page/ShopPayPageLayout/ShopPayPageLayout';
import PageTitleButton from 'components/atoms/common/PageTitleButton/PageTitleButton';
import AreaTitle from 'components/atoms/common/AreaTitle/AreaTitle';
import PayUserInfoBox from 'components/organisms/shop/PayUserInfoBox/PayUserInfoBox';
import Address from 'components/atoms/pay/address/Address';
// import PurchaseButton from 'components/atoms/common/PurchaseButton/PurchaseButton';
import ProductInfo from 'components/atoms/pay/productinfo/ProductInfo';
import BuyerInfo from 'components/atoms/pay/buyerinfo/BuyerInfo';
import PayCheck from 'components/atoms/pay/paycheck/PayCheck';
import EndButton from 'components/atoms/pay/endbutton/EndButton';
import { Navigate, useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import userState from 'recoil/user';

/** 고객 관려 데이터 받아오기 ( 이름, 이메일, 주소, 구매상품, 전화번호)
 *  @params 고객데이터 전체 넣어주기
 */
function ShopPay() {
	const [user] = useRecoilState(userState);
	const { state } = useLocation();

	if (!state?.product) return <Navigate to="/" />;
	if (user)
		return (
			<ShopPayPageLayout>
				<PageTitleButton type="back" text="이전으로" />
				<AreaTitle title="주문/결제" url="#" />
				<PayUserInfoBox text="주문자 정보">
					<BuyerInfo info={user.userName} />
					<BuyerInfo info={user.email} />
				</PayUserInfoBox>
				<Address address={user.shipping_address ?? '배송지 정보 없음'} name={user.userName} phone="01012345678" />
				<ProductInfo product={state.product} />
				<PayCheck product={state.product} />
				{/* <EndButton pid={pid} /> */}
				<EndButton product={state.product} />
			</ShopPayPageLayout>
		);

	return <Navigate to="login" />;
}

export default ShopPay;
