import React, { ReactNode } from 'react';
import './VideoConsultingMenuItem.scss';
import classnames from 'classnames';

interface IConsultingMenuItemProps {
	icon: ReactNode;
	isActive: boolean;
	isDanger: boolean;
	handleClick: () => void;
}
/**
 * 컨설팅 메뉴 아이템
 * @param icon 아이콘 요소 (ReactNode)
 * @param isActive 버튼의 활성 여부
 * @param isDanger 버튼 색 빨강인지 아닌지 결정
 * @param handleClick 버튼 클릭 시 동작 할 이벤트
 */
function ConsultingMenuItem({ icon, isActive, isDanger, handleClick }: IConsultingMenuItemProps) {
	const className = classnames('consulting-menu-item', { danger: isDanger, active: isActive });
	return (
		<button type="button" className={className} onClick={handleClick}>
			{icon}
		</button>
	);
}

export default ConsultingMenuItem;
