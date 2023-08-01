import React from 'react';
import './PageTitle.scss';

/**
 * 페이지 제목 컴포넌트
 * @param icon string, 아이콘 url
 * @param text string, 아이콘 옆에 있는 텍스트
 */
function PageTitle({ icon, text }: { icon: string; text: string }) {
	return (
		<div className="page-title-container">
			<div className="icon-wrap">
				<img src={icon} alt={text} height={14} width={14} />
			</div>
			<h1>{text}</h1>
		</div>
	);
}

export default PageTitle;
