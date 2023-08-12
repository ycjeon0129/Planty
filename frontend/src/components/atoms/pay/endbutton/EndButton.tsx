import React from 'react';
import './EndButton.scss';
import { useNavigate } from 'react-router-dom';

// function EndButton({ pid }: { pid: number }) {
function EndButton() {
	const navigate = useNavigate(); // Get
	const handlePurchaseClick = () => {
		// navigate(`/perchase/${pid}`);
		navigate(`/payment/`);
	};
	return (
		<div className="btn-outer-container">
			<div className="btn-inner-container">
				<button type="button" onClick={handlePurchaseClick}>
					<span className="text-button">구매하기</span>
				</button>
			</div>
		</div>
	);
}

export default EndButton;
