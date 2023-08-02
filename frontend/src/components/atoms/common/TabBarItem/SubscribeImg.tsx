import React, { useState } from 'react';
import { ReactComponent as SubscribeLogo } from '../../../../assets/icons/tabbar/SubscribeImg.svg';
import './TabBarItem.scss';

function SubscribeImg() {
	const [isSubscribGreenVisible, setIsSubscribGreenVisible] = useState<boolean>(false);
	const isClicked = () => {
		setIsSubscribGreenVisible(!isSubscribGreenVisible);
		console.log(isSubscribGreenVisible);
	};
	return (
		<div className="menuBox" onClick={isClicked} aria-hidden="true">
			<div className="iconBox">
				<div className="iconBox">{isSubscribGreenVisible ? <SubscribeLogo fill="#03c75a" /> : <SubscribeLogo />}</div>
				{isSubscribGreenVisible ? <span className="Green">구독샵</span> : <span>구독샵</span>}
			</div>
		</div>
	);
}

export default SubscribeImg;
