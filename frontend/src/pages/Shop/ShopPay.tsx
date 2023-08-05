import React from 'react';
import ShopPayPageLayout from 'components/layout/Page/ShopPayPageLayout/ShopPayPageLayout';

function ShopPay() {
	return (
		<ShopPayPageLayout>
			<div> 이전으로 </div>
			<div> 주문/결제 </div>
			<div> 주문자 정보 </div>
			<div> 배송지 주소 (필수) </div>
			<div> 주문 상품 정보 </div>
			<div> 결제금액확인 </div>
			<div> 구매하기 </div>
		</ShopPayPageLayout>
	);
}

export default ShopPay;
