/* eslint-disable react/require-default-props */
import React from 'react';
import classNames from 'classnames';
import './MenuItem.scss';
import { useLocation } from 'react-router-dom';

interface MenuBarProps {
	img: string;
	text: string;
	handleClick: () => void;
	pathname?: string;
	isIng?: boolean;
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
function MenuBar({ img, text, handleClick, pathname, isIng }: MenuBarProps) {
	const realPathname = useLocation().pathname.split('/')[2];
	const isActive = pathname === realPathname;
	const className = classNames('menu-bar-outer-box', { isIng, active: isActive });

	return (
		<div className={className} onClick={handleClick} role="presentation">
			<img src={img} alt="아이콘" />
			<div className="menu-list">{text}</div>
		</div>
	);
}

export default MenuBar;
