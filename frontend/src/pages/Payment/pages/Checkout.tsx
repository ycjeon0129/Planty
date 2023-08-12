import React, { useEffect, useRef, useState } from 'react';
import { PaymentWidgetInstance, loadPaymentWidget, ANONYMOUS } from '@tosspayments/payment-widget-sdk';
import { nanoid } from 'nanoid';
import './Checkout.scss';

// import '../App.css';

const selector = '#payment-widget';
const clientKey = 'test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq';
// const customerKey = 'YbX2HuSlsC9uVJW6NMRMj';

export default function CheckoutPage() {
	const paymentWidgetRef = useRef<PaymentWidgetInstance | null>(null);
	const paymentMethodsWidgetRef = useRef<ReturnType<PaymentWidgetInstance['renderPaymentMethods']> | null>(null);
	const [price] = useState(25_000);

	useEffect(() => {
		(async () => {
			// ------  결제위젯 초기화 ------
			// 비회원 결제에는 customerKey 대신 ANONYMOUS를 사용하세요.
			const paymentWidget = await loadPaymentWidget(clientKey, ANONYMOUS); // 회원 결제
			// const paymentWidget = await loadPaymentWidget(clientKey, ANONYMOUS); // 비회원 결제

			// ------  결제위젯 렌더링 ------
			// https://docs.tosspayments.com/reference/widget-sdk#renderpaymentmethods선택자-결제-금액-옵션
			const paymentMethodsWidget = paymentWidget.renderPaymentMethods(selector, { value: price });

			// ------  이용약관 렌더링 ------
			// https://docs.tosspayments.com/reference/widget-sdk#renderagreement선택자
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
		// https://docs.tosspayments.com/reference/widget-sdk#updateamount결제-금액
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
					<div className="pay-right">{`${price.toLocaleString()}원`}</div>
				</div>
			</div>
			<div id="agreement" />

			<button
				className="pay-button"
				type="button"
				onClick={async () => {
					const paymentWidget = paymentWidgetRef.current;

					try {
						// ------ '결제하기' 버튼 누르면 결제창 띄우기 ------
						// https://docs.tosspayments.com/reference/widget-sdk#requestpayment결제-정보
						await paymentWidget?.requestPayment({
							orderId: nanoid(),
							orderName: 'Planty 구독',
							customerName: '김싸피',
							customerEmail: 'customer123@gmail.com',
							successUrl: `${window.location.origin}/success`,
							failUrl: `${window.location.origin}/fail`,
						});
					} catch (error) {
						// 에러 처리하기
						console.error(error);
					}
				}}
			>
				결제하기
			</button>
		</div>
	);
}
