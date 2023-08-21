import React from 'react';
import './PayComplete.scss';
import { ReactComponent as CompleteIcon } from 'assets/icons/Paycomplete.svg';
import { ReactComponent as LogoIcon } from 'assets/icons/logo/PlantyLogo.svg';
import { ReactComponent as BackIcon } from 'assets/icons/Back.svg';
import useMovePage from 'hooks/common/useMovePage';

function PayComplete({ price, spid = 0 }: { price: number; spid: number }) {
	const { movePage } = useMovePage();

	return (
		<div className="pay-complete-box">
			<CompleteIcon />
			<div className="pay-complete-text">
				<div className="pay-complete-planty">
					<LogoIcon />
				</div>
				<div className="product-title">{spid !== 0 ? '구독 상품' : '응급실 티켓'}</div>
				<div className="pay-complete-cost">{price.toLocaleString()}원 결제 완료</div>
				<button type="button" className="pay-complete-footer" onClick={() => movePage('/home', null)}>
					<BackIcon fill="#a7a7a7" />
					<span>홈으로 돌아가기</span>
				</button>
			</div>
		</div>
	);
}

export default PayComplete;
