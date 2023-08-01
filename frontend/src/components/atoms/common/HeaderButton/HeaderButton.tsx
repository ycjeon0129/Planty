import React from 'react';
import './HeaderButton.scss';

/**
 * 뒤로가기, 닫기 버튼이 있는 헤더 컴포넌트
 * @param icon string, 아이콘 url
 * @param text string, 버튼 옆에 있는 텍스트
 */
function HeaderButton({ icon, text }: { icon: string; text: string }) {
	return (
		<div className="header-button">
			<button
				type="button"
				onClick={() => {
					alert('클릭');
				}}
			>
				<img src={icon} alt={text} height={14} width={14} />
			</button>
			<h1>{text}</h1>
		</div>
	);
}

export default HeaderButton;
