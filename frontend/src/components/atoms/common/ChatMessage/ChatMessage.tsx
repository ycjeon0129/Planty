import React from 'react';
import './ChatMessage.scss';

/**
 * 채팅창 메세지 하나하나
 * @param text 메세지 내용
 * @param time 메세지 발신 시간
 * @param person 보내는 주체 (me|you)
 */
function ChatMessage({ text, time, person }: { text: string; time: string; person: string }) {
	if (person === 'me') {
		return (
			<div>
				<div className="message-container right">
					<div className="time">{time}</div>
					<div className="message-box green">
						<div className="me">{text}</div>
					</div>
				</div>
			</div>
		);
	}
	if (person === 'you') {
		return (
			<div>
				<div className="message-container left">
					<div className="message-box white">
						<div className="you">{text}</div>
					</div>
					<div className="time">{time}</div>
				</div>
			</div>
		);
	}

	return <div>사용자가 Me나 You가 아님!!</div>;
}
//
export default ChatMessage;
