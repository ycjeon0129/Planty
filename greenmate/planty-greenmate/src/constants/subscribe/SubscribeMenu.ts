export interface IMenu {
	key: string;
	default: IMenuItem[];
}

export interface IMenuItem {
	idx: number;
	title: string;
	url: string;
}

export const SUBSCRIBES_MENU: IMenu = {
	key: 'MENU',
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
