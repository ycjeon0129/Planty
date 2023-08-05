import React from 'react';
import './DetailMenuList.scss';
import { SUB_MENU_DETAIL_LIST } from 'constants/menu/MypageMenuState';
import DetailMenuItem from '../DetailMenuItem/DetailMenuItem';

/**
 * Mypage 서브 메뉴의 상세 메뉴 목록
 * @param menu string, 서브 메뉴의 이름
 */
function DetailMenuList({ menu }: { menu: string }) {
	return (
		<ul className="detail-menu-list-container">
			{SUB_MENU_DETAIL_LIST[menu].map((v) => (
				<DetailMenuItem key={v.text} text={v.text} url={v.url} isToggle={v.isToggle} />
			))}
		</ul>
	);
}

export default DetailMenuList;
