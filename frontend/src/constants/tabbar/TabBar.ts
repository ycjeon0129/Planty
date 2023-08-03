import HomeIcon from 'assets/icons/tabbar/HomeImg.svg';
import GreenHomeIcon from 'assets/icons/tabbar/GreenHomeImg.svg';
import GreenSubscribeIcon from 'assets/icons/tabbar/GreenSubscribeImg.svg';
import GreenEmergecnyIcon from 'assets/icons/tabbar/GreenEmergencyImg.svg';
import GreenMypageIcon from 'assets/icons/tabbar/GreenMypageImg.svg';
import SubscribeIcon from 'assets/icons/tabbar/SubscribeImg.svg';
import EmergecnyIcon from 'assets/icons/tabbar/EmergencyImg.svg';
import MypageIcon from 'assets/icons/tabbar/MypageImg.svg';

interface TabBarProps {
	[key: string]: {
		imgSrc: {
			isActive: string;
			unActive: string;
		};
		imgName: string;
	};
}

const TabMenu: TabBarProps = {
	home: {
		imgSrc: { unActive: HomeIcon, isActive: GreenHomeIcon },
		imgName: '홈',
	},
	shop: {
		imgSrc: { unActive: SubscribeIcon, isActive: GreenSubscribeIcon },
		imgName: '구독샵',
	},
	emergency: {
		imgSrc: { unActive: EmergecnyIcon, isActive: GreenEmergecnyIcon },
		imgName: '응급실',
	},
	mypage: {
		imgSrc: { unActive: MypageIcon, isActive: GreenMypageIcon },
		imgName: '마이페이지',
	},
};

export const NOT_ARROWED_PATH = ['/error', '/mypage/booking'];

export default TabMenu;
