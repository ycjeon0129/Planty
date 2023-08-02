import React from 'react';
import './ChatButton.scss';
import classnames from 'classnames';

/**
 * 원형의 채팅 버튼
 * @param icon 버튼의 타입 (Camera,Mic,Message,Exit 등)
 * @param color 버튼의 배경색상
 * @param handleClick 버튼을 클릭했을 때의 동작
 * @param isActive 활성화상태
 */
function ChatButtonItem({
	icon,
	color,
	isActive,
	handleClick,
}: {
	icon: string;
	color: string;
	isActive: boolean;
	handleClick: () => void;
}) {
	const className = classnames('chat-button', { [color]: isActive, default: !isActive });
	return (
		<div className="btn-item">
			<button type="button" className={className} onClick={handleClick}>
				<img src={icon} alt="경로확인" />
			</button>
		</div>
	);
}

export default ChatButtonItem;
