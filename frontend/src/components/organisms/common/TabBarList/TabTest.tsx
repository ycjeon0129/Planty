import React, { useState } from 'react';
import './TabBarList.scss';
// import SubscribeImg from 'components/atoms/common/TabBarItem/SubscribeImg';
// import EmergencyImg from 'components/atoms/common//TabBarItem/EmergencyImg';
// import MypageImg from 'components/atoms/common/TabBarItem/MypageImg';
import { ReactComponent as HomeLogo } from '../../../../assets/icons/tabbar/HomeImg.svg';
import { ReactComponent as SubscribeLogo } from '../../../../assets/icons/tabbar/SubscribeImg.svg';
import { ReactComponent as EmergencyLogo } from '../../../../assets/icons/tabbar/EmergencyImg.svg';
import { ReactComponent as MypageLogo } from '../../../../assets/icons/tabbar/MypageImg.svg';

function TabTest() {
	const [isHomeGreenVisible, setIsHomeGreenVisible] = useState<boolean>(true);
	const [isSubscribGreenVisible, setIsSubscribGreenVisible] = useState<boolean>(false);
	const [isEmergencyGreenVisible, setIsEmergencyGreenVisible] = useState<boolean>(false);
	const [isMyPageGreenVisible, setIsMyPageGreenVisible] = useState<boolean>(false);

	const handleHomeClick = () => {
		setIsHomeGreenVisible(!isHomeGreenVisible);
		setIsSubscribGreenVisible(false);
		setIsEmergencyGreenVisible(false);
		setIsMyPageGreenVisible(false);
	};

	const handleSubscribClick = () => {
		setIsHomeGreenVisible(false);
		setIsSubscribGreenVisible(!isSubscribGreenVisible);
		setIsEmergencyGreenVisible(false);
		setIsMyPageGreenVisible(false);
	};

	const handleEmergencyClick = () => {
		setIsHomeGreenVisible(false);
		setIsSubscribGreenVisible(false);
		setIsEmergencyGreenVisible(!isEmergencyGreenVisible);
		setIsMyPageGreenVisible(false);
	};

	const handleMyPageClick = () => {
		setIsHomeGreenVisible(false);
		setIsSubscribGreenVisible(false);
		setIsEmergencyGreenVisible(false);
		setIsMyPageGreenVisible(!isMyPageGreenVisible);
	};

	return (
		<div className="container">
			<div className="mainBox">
				<div onClick={handleHomeClick} aria-hidden="true">
					<div className="menuBox">
						<div className="iconBox">{isHomeGreenVisible ? <HomeLogo fill="#03c75a" /> : <HomeLogo />}</div>
						{isHomeGreenVisible ? <span className="Green">홈</span> : <span>홈</span>}
					</div>
				</div>
				<div onClick={handleSubscribClick} aria-hidden="true">
					<div className="menuBox">
						<div className="iconBox">
							{isSubscribGreenVisible ? <SubscribeLogo fill="#03c75a" /> : <SubscribeLogo />}
						</div>
						{isSubscribGreenVisible ? <span className="Green">구독샵</span> : <span>구독샵</span>}
					</div>
				</div>
				<div onClick={handleEmergencyClick} aria-hidden="true">
					<div className="menuBox">
						<div className="iconBox">
							{isEmergencyGreenVisible ? <EmergencyLogo fill="#03c75a" /> : <EmergencyLogo />}
						</div>
						{isEmergencyGreenVisible ? <span className="Green">응급실</span> : <span>응급실</span>}
					</div>
				</div>
				<div onClick={handleMyPageClick} aria-hidden="true">
					<div className="menuBox">
						<div className="iconBox">{isMyPageGreenVisible ? <MypageLogo fill="#03c75a" /> : <MypageLogo />}</div>
						{isMyPageGreenVisible ? <span className="Green">마이페이지</span> : <span>마이페이지</span>}
					</div>
				</div>
			</div>
		</div>
	);
}

export default TabTest;
