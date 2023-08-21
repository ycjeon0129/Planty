import React from 'react';
import './IconText.scss';

/**
 * 아이콘과 텍스트 컴포넌트
 * @param imgUrl string, 아이콘 src
 * @param text string, 아이콘 옆에 있는 텍스트
 */
function IconText({ imgUrl, text }: { imgUrl: string; text: string }) {
	return (
		<div className="icon-text-container">
			<div className="img-wrap">
				<img src={imgUrl} alt={text} height={16} width={16} />
			</div>
			<p className="text">{text}</p>
		</div>
	);
}

export default IconText;
