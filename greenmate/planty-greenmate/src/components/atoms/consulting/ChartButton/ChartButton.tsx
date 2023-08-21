import React from 'react';
import classnames from 'classnames';
import './ChartButton.scss';

/**
 * 차트 온/습도 토글 버튼
 * @param type 온도(danger) / 습도(success)
 * @param isActive 차트 버튼 활성화/비활성화
 * @param message 차트 버튼에 들어갈 메시지
 */
function ChartToggleButton({
	type,
	isActive,
	message,
	onClick,
}: {
	isActive: boolean;
	message: string;
	type: string;
	onClick: () => void;
}) {
	const className = classnames('chart-button', { [type]: isActive, disabled: !isActive });
	const circleColor = classnames('circle', { [type]: isActive, disabled: !isActive });
	return (
		<button type="button" className={className} onClick={onClick}>
			<span className={circleColor}>{message}</span>
		</button>
	);
}

export default ChartToggleButton;
