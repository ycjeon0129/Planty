import React, { useEffect, useRef, useState } from 'react';
import { PaymentWidgetInstance, loadPaymentWidget, ANONYMOUS } from '@tosspayments/payment-widget-sdk';
import './Checkout.scss';
import { useNavigate, useLocation } from 'react-router-dom';
import { saveSubscribeApi } from 'utils/api/subscribe';
import { toast } from 'react-hot-toast';

const selector = '#payment-widget';
const clientKey = 'test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq';
// const customerKey = 'YbX2HuSlsC9uVJW6NMRMj';

export default function CheckoutPage() {
	const { state } = useLocation();
	const paymentWidgetRef = useRef<PaymentWidgetInstance | null>(null);
	const paymentMethodsWidgetRef = useRef<ReturnType<PaymentWidgetInstance['renderPaymentMethods']> | null>(null);
	const [price] = useState(25_000);
	const navigate = useNavigate();

	// 결제하기 버튼 클릭 시
	const payment = async () => {
		// TODO : 결제하는 로직 api if문으로 추가해야함.
		try {
			const response = await saveSubscribeApi(state.product.spid);

			if (response.status === 200) {
				toast.success('결제 및 구독에 성공했습니다.');
				navigate(`/payment/success`, { state: { price: state.product.price } });
			}
		} catch (error) {
			toast.error('결제에 실패했습니다.');
			navigate(`/payment/fail`);
			console.error(error);
		}
	};

	useEffect(() => {
		(async () => {
			// ------  결제위젯 초기화 ------
			// 비회원 결제에는 customerKey 대신 ANONYMOUS를 사용하세요.
			const paymentWidget = await loadPaymentWidget(clientKey, ANONYMOUS); // 회원 결제

			// ------  결제위젯 렌더링 ------
			const paymentMethodsWidget = paymentWidget.renderPaymentMethods(selector, { value: price });

			// ------  이용약관 렌더링 ------
			paymentWidget.renderAgreement('#agreement');

			paymentWidgetRef.current = paymentWidget;
			paymentMethodsWidgetRef.current = paymentMethodsWidget;
		})();
	});

	useEffect(() => {
		const paymentMethodsWidget = paymentMethodsWidgetRef.current;

		if (paymentMethodsWidget == null) {
			return;
		}

		// ------ 금액 업데이트 ------
		paymentMethodsWidget.updateAmount(price, paymentMethodsWidget.UPDATE_REASON.COUPON);
	}, [price]);

	return (
		<div id="pay-container">
			<span />
			<span />

			<div id="payment-widget" />
			<div className="pay-center">
				<div className="pay-box">
					<div className="pay-left">총 결제금액</div>
					{/* <div className="pay-right">{`${price.toLocaleString()}원`}</div> */}
					<div className="pay-right">{state.product.price}원</div>
				</div>
			</div>
			<div id="agreement" />

			<button className="pay-button" type="button" onClick={payment}>
				결제하기
			</button>
		</div>
	);
}
