import HomeIcon from 'assets/icons/tabbar/HomeImg.svg';
import SubscribeIcon from 'assets/icons/tabbar/SubscribeImg.svg';
import EmergecnyIcon from 'assets/icons/tabbar/EmergencyImg.svg';
import MypageIcon from 'assets/icons/tabbar/MypageImg.svg';

interface TabBarProps {
	[key: string]: {
		imgSrc: string;
		imgName: string;
	};
}

const TabMenu: TabBarProps = {
	home: {
		imgSrc: HomeIcon,
		imgName: '홈',
	},
	shop: {
		imgSrc: SubscribeIcon,
		imgName: '구독샵',
	},
	emergency: {
		imgSrc: EmergecnyIcon,
		imgName: '응급실',
	},
	mypage: {
		imgSrc: MypageIcon,
		imgName: '마이페이지',
	},
};

export default TabMenu;
