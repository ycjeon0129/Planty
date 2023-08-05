import React from 'react';
import './PurchaseButton.scss';
import { useNavigate } from 'react-router-dom';

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
