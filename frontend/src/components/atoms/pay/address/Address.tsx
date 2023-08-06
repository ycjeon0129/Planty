import React from 'react';
import './Address.scss';

/** 배송지 주소 적는 곳
 * @params address : 주문자 데이터에서 개인주소, name : 주문자 이름, phone: 주문자 전화번호
 */
function Address({ address, name, phone }: { address: string; name: string; phone: string }) {
	const call = phone.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
	return (
		<div className="pay-address-box">
			<div className="subject-text">배송지 주소 (필수)</div>
			<div className="buyer-info-box">
				<div className="pay-address-box-sm">
					{/* <div className="black-text">받는 사람: </div> */}
					<div className="text">
						{name} | {call}
					</div>
				</div>
				<div className="pay-address-box-sm">
					{/* <div className="black-text">배송지: </div> */}
					<div className="black-text">{address}</div>
				</div>
				{/* <div className="pay-address-box-sm">
					<div className="black-text">전화번호: </div>
					<div className="text">{call}</div>
				</div> */}
			</div>
		</div>
	);
}

export default Address;
