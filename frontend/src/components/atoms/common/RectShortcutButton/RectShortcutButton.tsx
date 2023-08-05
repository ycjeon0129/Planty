import React from 'react';
import './RectShortcutButton.scss';
import classNames from 'classnames';

/**
 * 직사각형의 메뉴 바로가기 버튼
 * @param type 메뉴의 타입 (booking | consulting-chat | consulting-video)
 * @param text 버튼에 들어갈 텍스트
 * @param handleClick 버튼을 클릭했을 때의 동작
 */
function RectShortcutButton({ type, text, handleClick }: { type: string; text: string; handleClick: () => void }) {
	const buttonClasses = classNames('rect-shortcut-button-container', type);

	return (
		<button type="button" className={buttonClasses} onClick={handleClick}>
			<h4>{text}</h4>
		</button>
	);
}

export default RectShortcutButton;
