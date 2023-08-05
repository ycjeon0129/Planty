import React from 'react';
import './PurchaseButton.scss';

function PurchaseButton() {
	return (
		<div className="purchase-button">
			<button type="button">
				<span className="text-button">구매하기</span>
			</button>
		</div>
	);
}

export default PurchaseButton;
