import React from 'react';
import classnames from 'classnames';
import './ChartButton.scss';

function ChartButton({
	isActive,
	message,
	color,
	onClick,
}: {
	isActive: boolean;
	message: string;
	color: string;
	onClick: () => void;
}) {
	// color : danger(온도) / success(습도)
	const className = classnames('chart-button', { [color]: isActive, disabled: !isActive });
	const circleColor = classnames('circle', { [color]: isActive, disabled: !isActive });
	return (
		<button type="button" className={className} onClick={onClick}>
			<span className={circleColor}>{message}</span>
		</button>
	);
}

export default ChartButton;
