import React from 'react';
import './EndButton.scss';
import { useNavigate } from 'react-router-dom';
import { IProductDetail } from 'types/domain/product';

function EndButton({ product }: { product: IProductDetail }) {
	const navigate = useNavigate(); // Get
	const handlePurchaseClick = () => {
		navigate(`/payment/${product.spid}`, { state: { product } });
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
