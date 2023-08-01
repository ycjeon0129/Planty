import HistoryIcon from '../../assets/icons/menu/History.svg';
import ReceiptIcon from '../../assets/icons/menu/Receipt.svg';
import SettingIcon from '../../assets/icons/menu/Setting.svg';
import InfoIcon from '../../assets/icons/menu/Info.svg';
import CalendarIcon from '../../assets/icons/menu/Calendar.svg';
import BookmarkIcon from '../../assets/icons/menu/Bookmark.svg';

interface IIconList {
	[key: string]: string;
}

const ICON_LIST: IIconList = {
	'이용 내역': HistoryIcon,
	'결제 내역': ReceiptIcon,
	'환경 설정': SettingIcon,
	'서비스 정보': InfoIcon,
	'예약 관리': CalendarIcon,
	'구독 목록': BookmarkIcon,
};

export default ICON_LIST;
