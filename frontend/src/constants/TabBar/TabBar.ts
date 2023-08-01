interface ToolMenuBarProps {
	[key: string]: {
		imgSrc: string;
		imgName: string;
	};
}

const ToolMenu: ToolMenuBarProps = {
	Home: {
		imgSrc: '../../../../assets/icons/ToolBar/HomeImg.svg',
		imgName: '홈',
	},
	Subscribe: {
		imgSrc: '../../../../assets/icons/ToolBar/SubscribeImg.svg',
		imgName: '구독샵',
	},
	Emergency: {
		imgSrc: '../../../../assets/icons/ToolBar/EmergencyImg.svg',
		imgName: '응급실',
	},
	Mypage: {
		imgSrc: '../../../../assets/icons/ToolBar/MypageImg.svg',
		imgName: '마이페이지',
	},
};

export default ToolMenu;
