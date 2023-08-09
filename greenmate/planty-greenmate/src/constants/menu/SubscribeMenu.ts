import { IMenu } from 'types/global';

const SUBSCRIBES_MENU: IMenu = {
	key: 'subscribes-menu',
	default: [
		{
			idx: 0,
			title: '내 구독 목록',
			url: '/subscribes/list',
		},
		{
			idx: 1,
			title: '전체 예약 일정',
			url: '/subscribes/calendar',
		},
	],
};

export default SUBSCRIBES_MENU;
