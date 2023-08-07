import React, { ReactNode } from 'react';
import { ReactComponent as HomeIcon } from 'assets/icons/sidebar/Home.svg';
import { ReactComponent as ShopIcon } from 'assets/icons/sidebar/Shop.svg';
import { ReactComponent as EmergencyIcon } from 'assets/icons/sidebar/Emergency.svg';
import { ReactComponent as MypageIcon } from 'assets/icons/sidebar/Mypage.svg';

interface SidebarProps {
	[key: string]: {
		icon: ReactNode;
		menu: string;
	};
}

export const MENUS: SidebarProps = {
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

export const NOT_ARROWED_PATH = ['/error', '/login', /\/subscribe\/\d+\/consulting/];
