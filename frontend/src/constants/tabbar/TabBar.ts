import HomeIcon from '../../assets/icons/tabbar/HomeImg.svg';
import SubscribeIcon from '../../assets/icons/tabbar/SubscribeImg.svg';
import EmergecnyIcon from '../../assets/icons/tabbar/EmergencyImg.svg';
import MypageIcon from '../../assets/icons/tabbar/MypageImg.svg';

interface ToolMenuBarProps {
	[key: string]: {
		imgSrc: string;
		imgName: string;
	};
}

const ToolMenu: ToolMenuBarProps = {
	Home: {
		imgSrc: HomeIcon,
		imgName: '홈',
	},
	Subscribe: {
		imgSrc: SubscribeIcon,
		imgName: '구독샵',
	},
	Emergency: {
		imgSrc: EmergecnyIcon,
		imgName: '응급실',
	},
	Mypage: {
		imgSrc: MypageIcon,
		imgName: '마이페이지',
	},
};

export default ToolMenu;
