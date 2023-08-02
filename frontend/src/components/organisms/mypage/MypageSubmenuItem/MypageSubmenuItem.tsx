import React from 'react';
import './MypageSubmenuItem.scss';
import IconText from 'components/atoms/common/IconText/IconText';
import { MENU_LIST } from 'constants/menu/MypageMenuState';
import { ReactComponent as NextIcon } from 'assets/icons/Next.svg';

/**
 * Mypage의 서브 메뉴 목록 아이템
 * @param text string, (이용 내역, 결제 내역, 환경 설정, 서비스 정보)
 */
function MypageSubmenuItem({ text }: { text: string }) {
	return (
		<li className="mypage-submenu-item-container">
			<IconText url={MENU_LIST[text]} text={text} />
			<NextIcon className="icon" />
		</li>
	);
}

export default MypageSubmenuItem;
