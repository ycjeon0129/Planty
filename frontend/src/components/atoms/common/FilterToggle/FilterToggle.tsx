import React from 'react';
import './FilterToggle.scss';
import classnames from 'classnames';

/**
 * 원형의 채팅 버튼
 * @param isActive 활성화상태[초록or회색]
 * @param text 버튼내부 text
 * @param handleClick 클릭함수
 */
function FilterToggle({ isActive, text, handleClick }: { isActive: boolean; text: string; handleClick: () => void }) {
	const className = classnames('filter-button', { primary: isActive, disabled: !isActive });
	return (
		<button type="button" className={className} onClick={handleClick}>
			{text}
		</button>
	);
}

export default FilterToggle;
