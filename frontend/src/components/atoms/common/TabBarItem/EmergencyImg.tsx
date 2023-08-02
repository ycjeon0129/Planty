import React from 'react';
import { ReactComponent as EmergencyLogo } from '../../../../assets/icons/tabbar/EmergencyImg.svg';
import './TabBarItem.scss';

function SubscribeImg() {
	return (
		<div className="menuBox">
			<div className="iconBox">
				{/* <img src={emergencyLogo} alt="응급" /> */}
				<EmergencyLogo />
			</div>
			<span>응급실</span>
		</div>
	);
}

export default SubscribeImg;
