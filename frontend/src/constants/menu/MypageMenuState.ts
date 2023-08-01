import HistoryIcon from '../../assets/icons/menu/History.svg';
import ReceiptIcon from '../../assets/icons/menu/Receipt.svg';
import SettingIcon from '../../assets/icons/menu/Setting.svg';
import InfoIcon from '../../assets/icons/menu/Info.svg';
import CalendarIcon from '../../assets/icons/menu/Calendar.svg';
import BookmarkIcon from '../../assets/icons/menu/Bookmark.svg';

interface IIconList {
	[key: string]: string;
}

export const MAIN_MENU_LIST: string[] = ['예약 관리', '구독 목록'];

export const SUB_MENU_LIST: string[] = ['이용 내역', '결제 내역', '환경 설정', '서비스 정보'];

export const MENU_LIST: IIconList = {
	[MAIN_MENU_LIST[0]]: CalendarIcon,
	[MAIN_MENU_LIST[1]]: BookmarkIcon,
	[SUB_MENU_LIST[0]]: HistoryIcon,
	[SUB_MENU_LIST[1]]: ReceiptIcon,
	[SUB_MENU_LIST[2]]: SettingIcon,
	[SUB_MENU_LIST[3]]: InfoIcon,
};
