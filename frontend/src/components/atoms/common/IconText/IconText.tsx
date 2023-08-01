import React from 'react';
import './IconText.scss';
import ICON_LIST from 'constants/menu/MypageMenuState';

/**
 * 아이콘과 텍스트 컴포넌트
 * @param text string, 아이콘 옆에 있는 텍스트
 */
function IconText({ text }: { text: string }) {
	return (
		<div className="icon-text-container">
			<div className="img-wrap">
				<img src={ICON_LIST[text]} alt={text} height={14} width={14} />
			</div>
			<p className="text">{text}</p>
		</div>
	);
}

export default IconText;
