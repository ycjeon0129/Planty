import React from 'react';
import { Link } from 'react-router-dom';
import NextIcon from 'assets/icons/Next.svg';
import './AreaTitle.scss';

/** 특정 영역의 제목을 나타내는 컴포넌트 (url이 #이면 링크 X)
 * @param title 특정 영역을 나타내는 제목
 * @param url 클릭 시 이동할 링크
 */
function AreaTitle({ title, url }: { title: string; url: string }) {
	return (
		<h2 className="area-title-container">
			{url === '#' ? (
				<span>{title}</span>
			) : (
				<Link to={url}>
					{title}
					<img src={NextIcon} alt={`${title} 메뉴로 이동.`} />
				</Link>
			)}
		</h2>
	);
}

export default AreaTitle;
