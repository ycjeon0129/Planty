import React, { useState } from 'react';
import { ReactComponent as HomeLogo } from '../../../../assets/icons/tabbar/HomeImg.svg';
import './TabBarItem.scss';

function HomeImg() {
	// const [imgSrc, setImgSrc] = useState("/src/assets/icons/homeIcon/homeGreen.png");
	// const [isHomeClicked, setIsHomeClicked] = useState<boolean>(true);

	// const clickHome = () => {
	//   const newImgSrc = isHomeClicked
	//     ? "../../../assets/icons/homeIcon/homeBlack.png"
	//     : "../../common/toolbarComp/HomeGreenImg.tsx";
	//   setImgSrc(newImgSrc);
	//   setIsHomeClicked(!isHomeClicked);
	//   console.log(newImgSrc);
	// 	console.log(imgSrc);
	// }
	const [isHomeGreenVisible, setIsHomeGreenVisible] = useState<boolean>(true);
	const isClicked = () => {
		setIsHomeGreenVisible(!isHomeGreenVisible);
		console.log(isHomeGreenVisible);
	};
	return (
		<div className="menuBox" onClick={isClicked} aria-hidden="true">
			<div className="iconBox">{isHomeGreenVisible ? <HomeLogo fill="#03c75a" /> : <HomeLogo />}</div>
			{isHomeGreenVisible ? <span className="Green">홈</span> : <span>홈</span>}
		</div>
	);
}

export default HomeImg;
