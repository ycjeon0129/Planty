import React from 'react';
import './MenuItem.scss';

interface MenuBarProps {
	img: string;
	text: string;
}

/** 왼쪽 사이드바 컴포넌트
 * @params img: 아이콘 text: 메뉴 이름
 * Class.svg = 클래스
 * Consulting.svg = 컨설팅
 * Dashboard.svg = 대시보드
 * Ing.svg = 현재 진행중인 컨설팅 or 채팅창
 * Profile.svg = 프로필
 * Setting = 설정
 */
function MenuBar({ img, text }: MenuBarProps) {
	return (
		<div className="menu-bar-outer-box">
			<img src={img} alt="아이콘" />
			<div className="menu-list">{text}</div>
		</div>
	);
}

export default MenuBar;
