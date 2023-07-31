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

	// const ImgName: string = ['홈', '구독샵', '응급실', '마이페이지'];
	return (
		<div>
			<div>ToolBarorganism</div>
			<div className="ToolBarOrgBox">
				<ToolMenuBar />
				<ToolMenuBar />
				<ToolMenuBar />
				<ToolMenuBar />
			</div>
		</div>
	);
}

export default ToolBarOrg;
