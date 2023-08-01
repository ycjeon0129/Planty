import React from 'react';
import { ReactComponent as MypageLogo } from '../../../../assets/icons/tabbar/MypageImg.svg';
import './TabBarItem.scss';

function SubscribeImg() {
	return (
		<div className="myPageBox">
			<div className="iconBox">
				{/* <img src={MypageLogo} alt="마이페이지" /> */}
				<MypageLogo />
			</div>
			<span>마이페이지</span>
		</div>
	);
}

export default SubscribeImg;
