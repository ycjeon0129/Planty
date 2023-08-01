import React from 'react';
import './SquareShortcutButton.scss';
import classNames from 'classnames';

// type = booking, consulting-chat, consulting-video
function SquareShortcutButton({ type, message, onClick }: { type: string; message: string; onClick: () => void }) {
	const buttonClasses = classNames('square-shortcut-button-container', type);

	return (
		<button type="button" className={buttonClasses} onClick={onClick}>
			<h3>{message}</h3>
		</button>
	);
}

export default SquareShortcutButton;
