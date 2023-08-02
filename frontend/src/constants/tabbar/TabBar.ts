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
		imgSrc: { isActive: HomeIcon, unActive: GreenHomeIcon },
		imgName: '홈',
	},
	shop: {
		imgSrc: { isActive: SubscribeIcon, unActive: GreenSubscribeIcon },
		imgName: '구독샵',
	},
	emergency: {
		imgSrc: { isActive: EmergecnyIcon, unActive: GreenEmergecnyIcon },
		imgName: '응급실',
	},
	mypage: {
		imgSrc: { isActive: MypageIcon, unActive: GreenMypageIcon },
		imgName: '마이페이지',
	},
};

export default TabMenu;
