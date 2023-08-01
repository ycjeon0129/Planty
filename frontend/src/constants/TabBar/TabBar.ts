interface ToolMenuBarProps {
	[key: string]: {
		imgSrc: string;
		imgName: string;
	};
}

const ToolMenu: ToolMenuBarProps = {
	Home: {
		imgSrc: '../../../../assets/icons/tabbar/HomeImg.svg',
		imgName: '홈',
	},
	Subscribe: {
		imgSrc: '../../../../assets/icons/tabbar/SubscribeImg.svg',
		imgName: '구독샵',
	},
	Emergency: {
		imgSrc: '../../../../assets/icons/tabbar/EmergencyImg.svg',
		imgName: '응급실',
	},
	Mypage: {
		imgSrc: '../../../../assets/icons/tabbar/MypageImg.svg',
		imgName: '마이페이지',
	},
};

export default ToolMenu;
