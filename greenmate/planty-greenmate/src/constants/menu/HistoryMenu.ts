import { IMenu } from 'types/base/global';

const HISTORY_MENU: IMenu = {
	key: 'history-menu',
	default: [
		{
			idx: 0,
			title: '지난 응급실 컨설팅',
			url: '/history/emergency',
		},
		{
			idx: 1,
			title: '지난 구독 컨설팅',
			url: '/history/consulting',
		},
	],
};

export default HISTORY_MENU;
