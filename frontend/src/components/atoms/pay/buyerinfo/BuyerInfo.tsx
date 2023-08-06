import React from 'react';
import './BuyerInfo.scss';

/** 결제 페이지에서 주문자 정보
 * @param 주문자의 이름과 이메일
 */

function BuyerInfo({ info }: { info: string }) {
	return (
		<div className="buyer-info-box">
			<div className="text">{info}</div>
		</div>
	);
}

export default BuyerInfo;
