import React from 'react';
import './PurchaseButton.scss';
import { useNavigate } from 'react-router-dom';

/** 현재 상품 pid와 데이터 + 주문자 데이터를 넣어서 url로 전송 */
function PurchaseButton() {
	const navigate = useNavigate(); // Get the navigate function from react-router-dom

	const handlePurchaseClick = () => {
		navigate('/shop/pay');
	};
	return (
		<div className="purchase-button">
			<button type="button" onClick={handlePurchaseClick}>
				<span className="text-button">구매하기</span>
			</button>
		</div>
	);
}

export default PurchaseButton;
