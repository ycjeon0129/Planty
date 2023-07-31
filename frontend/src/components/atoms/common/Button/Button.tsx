import React from 'react';
import classnames from 'classnames';
import './Button.scss';

function Button({ isActive, message, onClick }: { isActive: boolean; message: string; onClick: () => void }) {
	const className = classnames('button-container', { primary: isActive, disabled: !isActive });
	return (
		<div className={className} onClick={onClick} role="presentation">
			{message}
		</div>
	);
}

export default Button;
