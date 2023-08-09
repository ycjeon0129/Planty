import { IMenu } from 'types/global';

const HISTORY_MENU: IMenu = {
	key: 'history-menu',
	default: [
		{
			idx: 0,
			title: '응급실 컨설팅 내역',
			url: '/history/emergency',
		},
		{
			idx: 1,
			title: '구독 컨설팅 내역',
			url: '/history/consulting',
		},
	],
};

export default HISTORY_MENU;
