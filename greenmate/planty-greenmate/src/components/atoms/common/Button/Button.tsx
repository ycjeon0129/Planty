import React from 'react';
import classnames from 'classnames';
import './Button.scss';

/** 기본 버튼
 * @param isActive 버튼의 활성화/비활성화 여부
 * @param text 버튼에 들어갈 텍스트
 * @param handleClick 버튼을 클릭했을 때의 동작
 */
function Button({ isActive, text, handleClick }: { isActive: boolean; text: string; handleClick: () => void }) {
	const className = classnames('button-container', { primary: isActive, disabled: !isActive });
	return (
		<button type="button" className={className} onClick={handleClick}>
			{text}
		</button>
	);
}

export default Button;
