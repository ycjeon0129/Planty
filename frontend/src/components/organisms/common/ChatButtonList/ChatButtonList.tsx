import React from 'react';
import './ChatButtonList.scss';
import ChatButtonItem from 'components/atoms/common/ChatButton/ChatButton';
import Camera from 'assets/icons/chatbutton/Camera.svg';
import Mic from 'assets/icons/chatbutton/Mic.svg';
import Message from 'assets/icons/chatbutton/Message.svg';
import Exit from 'assets/icons/chatbutton/Exit.svg';

/**
 * 원형의 채팅 버튼
 * @param icon 버튼의 타입 (Camera,Mic,Message,Exit 등)
 * @param color 버튼의 배경색상 [default/danger/primary/success]
 * @param isActive !isActive이면 default 색상
 * @param handleClick 버튼을 클릭했을 때의 동작
 * width 300px로 임시 지정
 */

function ChatButtonList() {
	const test = () => {};
	return (
		<div className="btn-box">
			<ChatButtonItem icon={Camera} isActive color="primary" handleClick={test} />
			<ChatButtonItem icon={Mic} isActive={false} color="primary" handleClick={test} />
			<ChatButtonItem icon={Message} isActive color="success" handleClick={test} />
			<ChatButtonItem icon={Exit} isActive color="danger" handleClick={test} />
		</div>
	);
}

export default ChatButtonList;
