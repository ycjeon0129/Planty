import React from 'react';
import './CheckEquip.scss';

/**
 * 응급실 참여하기 - 마이크, 카메라 확인 text
 */
function CheckEquip() {
	return (
		<div className="check-equip-container">
			<div className="first">카메라와 마이크의 정상 작동을 확인하세요.</div>
			<div className="second">참여할 준비가 되셨나요?</div>
		</div>
	);
}

export default CheckEquip;
