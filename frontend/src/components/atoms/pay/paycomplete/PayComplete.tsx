import React from 'react';
import './PayComplete.scss';
import { ReactComponent as CompleteIcon } from 'assets/icons/Paycomplete.svg';
import { useNavigate } from 'react-router-dom';

function PayComplete({ price }: { price: number }) {
	const navigate = useNavigate();
	const goHome = () => {
		navigate(`/home/`);
	};
	return (
		<div className="pay-complete-box">
			<CompleteIcon />
			<div className="pay-complete-text">
				<div className="pay-complete-planty">Planty에서</div>
				<div className="pay-complete-cost">{price.toLocaleString()}원 결제 완료</div>
				<button type="button" className="pay-complete-footer" onClick={goHome}>
					홈으로 돌아가기
				</button>
			</div>
		</div>
	);
}

export default PayComplete;
