import React from 'react';
import './MypageSubmenuList.scss';
import { SUB_MENU_LIST } from '../../../../constants/menu/MypageMenuState';
import MypageSubmenuItem from '../MypageSubmenuItem/MypageSubmenuItem';

/**
 * Mypage의 서브 메뉴 목록(이용 내역, 결제 내역, 환경 설정, 서비스 정보)
 */
function MypageSubmenuList() {
	return (
		<ul className="mypage-submenu-list-container">
			{SUB_MENU_LIST.map((v) => (
				<MypageSubmenuItem key={v} text={v} />
			))}
		</ul>
	);
}

export default MypageSubmenuList;
