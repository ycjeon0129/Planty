import React from 'react';
import ToolMenuBar from 'components/atoms/common/ToolBar/ToolMenuBar';
import 'components/organisms/common/ToolBarOrg/ToolBarOrg.scss';

function ToolBarOrg() {
	// const ImgLst = [
	// 	'assets/icons/ToolBar/HomeImg.svg',
	// 	'assets/icons/ToolBar/SubscribeImg.svg',
	// 	'assets/icons/ToolBar/EmergencyImg.svg',
	// 	'assets/icons/ToolBar/MypageImg.svg',
	// ]

	// const handleMenuBar: string[] = [0, 1, 2, 3];

	const homeObject: { imgSrc: string; imgName: string } = {
		imgSrc: 'assets/icons/ToolBar/HomeImg.svg',
		imgName: '홈',
	};
	const SubscribeObject: { imgSrc: string; imgName: string } = {
		imgSrc: 'assets/icons/ToolBar/SubscribeImg.svg',
		imgName: '구독샵',
	};
	const EmergencyObject: { imgSrc: string; imgName: string } = {
		imgSrc: 'assets/icons/ToolBar/EmergencyImg.svg',
		imgName: '응급실',
	};
	const MypageObject: { imgSrc: string; imgName: string } = {
		imgSrc: 'assets/icons/ToolBar/MypageImg.svg',
		imgName: '마이페이지',
	};
	// const ImgName: string = ['홈', '구독샵', '응급실', '마이페이지'];
	return (
		<div>
			<div>ToolBarorganism</div>
			<div className="ToolBarOrgBox">
				<ToolMenuBar imgSrc={homeObject.imgSrc} imgName={homeObject.imgName} />
				<ToolMenuBar imgSrc={SubscribeObject.imgSrc} imgName={SubscribeObject.imgName} />
				<ToolMenuBar imgSrc={EmergencyObject.imgSrc} imgName={EmergencyObject.imgName} />
				<ToolMenuBar imgSrc={MypageObject.imgSrc} imgName={MypageObject.imgName} />
			</div>
		</div>
	);
}

export default ToolBarOrg;
