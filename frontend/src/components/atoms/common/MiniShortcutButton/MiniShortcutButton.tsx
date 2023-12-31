import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import './MiniShortcutButton.scss';
import BookmarkIcon from 'assets/icons/Bookmark.svg';
import CalendarRedIcon from 'assets/icons/CalendarRed.svg';

/**
 * 작은 사각형의 메뉴 바로가기 버튼
 * @param type 메뉴의 타입 (subscribeList | booking)
 * @param text 버튼에 들어갈 텍스트
 * @param handleClick 버튼을 클릭했을 때의 동작
 */
function MiniShortcutButton({ type, text, handleClick }: { type: string; text: string; handleClick: () => void }) {
	const [iconElement, setIconElement] = useState<ReactNode>();

	const setIcon = useCallback(() => {
		switch (type) {
			case 'subscribeList':
				setIconElement(<img src={BookmarkIcon} alt="구독목록 바로가기 아이콘" />);
				break;
			case 'booking':
				setIconElement(<img src={CalendarRedIcon} alt="예약관리 바로가기 아이콘" />);
				break;
			default:
				break;
		}
	}, [type]);

	useEffect(() => {
		setIcon();
	}, [setIcon]);

	return (
		<div className="mini-shortcut-button-container">
			<button type="button" onClick={handleClick}>
				{iconElement}
				<h3>{text}</h3>
			</button>
		</div>
	);
}

export default MiniShortcutButton;
