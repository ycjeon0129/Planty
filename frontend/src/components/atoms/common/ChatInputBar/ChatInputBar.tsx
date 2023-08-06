import React from 'react';
import './ChatInputBar.scss';
import { ReactComponent as Arrow } from 'assets/icons/arrow/ChatUpWhite.svg';

/**
 * 채팅 인풋 바
 * @param handleClick 보내기버튼 눌렀을 때
 */
function ChatInputBar({ handleClick }: { handleClick: () => void }) {
	return (
		<div className="input-bar">
			<form action="" method="post">
				<input type="text" placeholder="메시지 보내기" />
			</form>
			<button type="submit" className="send-btn" onClick={handleClick}>
				<Arrow />
			</button>
		</div>
	);
}

export default ChatInputBar;
