import React from 'react';
import './RectShortcutButton.scss';
import classNames from 'classnames';

// type = booking, consulting-chat, consulting-video
function RectShortcutButton({ type, message, onClick }: { type: string; message: string; onClick: () => void }) {
	const buttonClasses = classNames('rect-shortcut-button-container', type);

	return (
		<button type="button" className={buttonClasses} onClick={onClick}>
			<h3>{message}</h3>
		</button>
	);
}

export default RectShortcutButton;
