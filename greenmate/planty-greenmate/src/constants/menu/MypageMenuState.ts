import HistoryIcon from '../../assets/icons/menu/History.svg';
import ReceiptIcon from '../../assets/icons/menu/Receipt.svg';
import SettingIcon from '../../assets/icons/menu/Setting.svg';
import InfoIcon from '../../assets/icons/menu/Info.svg';
import CalendarIcon from '../../assets/icons/menu/Calendar.svg';
import BookmarkIcon from '../../assets/icons/menu/Bookmark.svg';

interface IMenuList {
	[key: string]: string;
}

interface ISubMenuDetailList {
	[key: string]: IDetail[];
}

export interface IDetail {
	text: string;
	url?: string;
	isToggle?: boolean;
}

export const MAIN_MENU_LIST: string[] = ['예약 관리', '내 구독 목록'];

export const SUB_MENU_LIST: string[] = ['이용 내역', '결제 내역', '환경 설정', '서비스 정보'];

export const MENU_ICON_LIST: IMenuList = {
	[MAIN_MENU_LIST[0]]: CalendarIcon,
	[MAIN_MENU_LIST[1]]: BookmarkIcon,
	[SUB_MENU_LIST[0]]: HistoryIcon,
	[SUB_MENU_LIST[1]]: ReceiptIcon,
	[SUB_MENU_LIST[2]]: SettingIcon,
	[SUB_MENU_LIST[3]]: InfoIcon,
};

export const MENU_URL_LIST: IMenuList = {
	[MAIN_MENU_LIST[0]]: '/mypage/booking',
	[MAIN_MENU_LIST[1]]: '/mypage/subscribe',
	[SUB_MENU_LIST[0]]: '/mypage/service-history',
	[SUB_MENU_LIST[1]]: '/mypage/pay-history',
	[SUB_MENU_LIST[2]]: '/mypage/setting',
	[SUB_MENU_LIST[3]]: '/mypage/service-info',
};

export const SUB_MENU_DETAIL_LIST: ISubMenuDetailList = {
	[SUB_MENU_LIST[0]]: [
		{
			text: '응급실 이용 내역',
			url: '/admin/develop',
		},
		{
			text: '구독 컨설팅 이용 내역',
			url: '/admin/develop',
		},
	],
	[SUB_MENU_LIST[1]]: [
		{
			text: '구독 상품 결제 내역',
			url: '',
		},
		{
			text: '응급실 결제 내역',
			url: '',
		},
	],
	[SUB_MENU_LIST[2]]: [
		{
			text: '다크 모드',
			isToggle: true,
		},
		{
			text: '알림 설정',
			isToggle: true,
		},
	],
	[SUB_MENU_LIST[3]]: [
		{
			text: '이용 약관',
			url: '',
		},
		{
			text: '개인 정보 처리 방침',
			url: '',
		},
		{
			text: '자주 묻는 질문',
			url: '',
		},
		{
			text: '버전 정보',
			url: '',
		},
	],
};
