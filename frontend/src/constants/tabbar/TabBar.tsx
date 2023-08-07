import React, { ReactNode } from 'react';
import { ReactComponent as HomeIcon } from 'assets/icons/tabbar/Home.svg';
import { ReactComponent as ShopIcon } from 'assets/icons/tabbar/Shop.svg';
import { ReactComponent as EmergencyIcon } from 'assets/icons/tabbar/Emergency.svg';
import { ReactComponent as MypageIcon } from 'assets/icons/tabbar/Mypage.svg';

interface TabBarProps {
	[key: string]: {
		icon: ReactNode;
		menu: string;
	};
}

export const MENUS: TabBarProps = {
	home: {
		icon: <HomeIcon />,
		menu: '홈',
	},
	shop: {
		icon: <ShopIcon />,
		menu: '구독샵',
	},

	emergency: {
		icon: <EmergencyIcon />,
		menu: '응급실',
	},
	mypage: {
		icon: <MypageIcon />,
		menu: '마이페이지',
	},
};

export const NOT_ARROWED_PATH = [
	'/error',
	'/login',
	'/mypage/booking',
	'/subscribe',
	/\/subscribe\/\d+\/booking/,
	/\/subscribe\/\d+\/consulting/,
	'/error',
	'/consultingloading',
];
