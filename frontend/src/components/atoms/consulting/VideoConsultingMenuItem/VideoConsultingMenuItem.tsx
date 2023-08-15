import React, { ReactNode } from 'react';
import './VideoConsultingMenuItem.scss';
import classnames from 'classnames';

interface IConsultingMenuItemProps {
	menuKey: string;
	icon: ReactNode;
	isActive: boolean;
	isDanger: boolean;
	handleClick: () => void;
	hideChart: boolean;
}
/**
 * 컨설팅 메뉴 아이템
 * @param icon 아이콘 요소 (ReactNode)
 * @param isActive 버튼의 활성 여부
 * @param isDanger 버튼 색 빨강인지 아닌지 결정
 * @param handleClick 버튼 클릭 시 동작 할 이벤트
 */
function ConsultingMenuItem({ menuKey, icon, isActive, isDanger, handleClick, hideChart }: IConsultingMenuItemProps) {
	const className = classnames('consulting-menu-item', {
		danger: isDanger,
		active: isActive,
		hide: hideChart && menuKey === 'chart',
	});

	return (
		<button type="button" className={className} onClick={handleClick}>
			{icon}
		</button>
	);
}

export default ConsultingMenuItem;
