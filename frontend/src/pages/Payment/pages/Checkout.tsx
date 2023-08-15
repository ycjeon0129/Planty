import React, { useCallback, useEffect, useRef, useState } from 'react';
import { PaymentWidgetInstance, loadPaymentWidget, ANONYMOUS } from '@tosspayments/payment-widget-sdk';
import './Checkout.scss';
import { useLocation } from 'react-router-dom';
import { saveSubscribeApi } from 'utils/api/subscribe';
import { toast } from 'react-hot-toast';
import useUser from 'hooks/useUser';
import useMovePage from 'hooks/useMovePage';
import { createProductBuyApi } from 'utils/api/product';

const selector = '#payment-widget';
const clientKey = 'test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq';
// const customerKey = 'YbX2HuSlsC9uVJW6NMRMj';

export default function CheckoutPage() {
	const [user, setUser] = useUser();
	const { state } = useLocation();
	const { movePage, goBack } = useMovePage();
	const [type, setType] = useState<number>(0); // type 응급실 티켓 구매: 0, 구독 상품 구매: 1
	const paymentWidgetRef = useRef<PaymentWidgetInstance | null>(null);
	const paymentMethodsWidgetRef = useRef<ReturnType<PaymentWidgetInstance['renderPaymentMethods']> | null>(null);

	/**
	 * 결제하기 버튼 클릭 시 응급실 티켓 또는 구독 상품 구매
	 */
	const payment = async () => {
		// TODO : 결제하는 로직 api if문으로 추가해야함.
		try {
			if (type === 0) {
				// 응급실 티켓 구매
				await createProductBuyApi(1, 1).then((res) => {
					console.log('res', res);
					const newUser = user && {
						...user,
						emergencyCount: user.emergencyCount + 1,
					};
					setUser(newUser);
					// toast.success('티켓 구매에 성공하였습니다. 응급실 서비스를 이용해 보세요!');
					movePage('/payment/success/0', { product: state.product });
				});
			} else {
				// 구독 상품 구매
				await saveSubscribeApi(state.product.spid).then((res) => {
					console.log('res', res);
					// toast.success('구독에 성공하였습니다. 컨설팅 서비스를 이용해 보세요!');
					movePage(`/payment/success/${state.product.spid}`, { product: state.product });
				});
			}
		} catch (error) {
			console.error(error);
			toast.error('이미 구독된 상품입니다.');
			goBack();
			goBack();
		}
	};

	const handleLoad = useCallback(async () => {
		const paymentWidget = await loadPaymentWidget(clientKey, ANONYMOUS); // 회원 결제
		const paymentMethodsWidget = paymentWidget.renderPaymentMethods(selector, { value: state.product.price });
		paymentWidget.renderAgreement('#agreement');

		paymentWidgetRef.current = paymentWidget;
		paymentMethodsWidgetRef.current = paymentMethodsWidget;
	}, [state.product.price]);

	useEffect(() => {
		if (state.product.spid) {
			setType(1);
			handleLoad();
		} else {
			setType(0);
			handleLoad();
		}
	}, [state, handleLoad]);

	if (!state) {
		toast.error('잘못된 접근입니다. 홈화면으로 돌아갑니다.');
		movePage('/', null);
	}

	return (
		<div id="pay-container">
			<span />
			<span />

			<div id="payment-widget" />
			<div className="pay-center">
				<div className="pay-box">
					<div className="pay-left">총 결제금액</div>
					<div className="pay-right">{`${state.product.price.toLocaleString()} 원`}</div>
				</div>
			</div>
			<div id="agreement" />

			<button className="pay-button" type="button" onClick={payment}>
				결제하기
			</button>
		</div>
	);
}
