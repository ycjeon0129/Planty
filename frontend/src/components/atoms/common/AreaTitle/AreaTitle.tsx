import React from 'react';
import { Link } from 'react-router-dom';
import NextIcon from 'assets/icons/Next.svg';
import './AreaTitle.scss';

// Page 내 특정 영역의 제목을 나타내는 컴포넌트
function AreaTitle({ title, url }: { title: string; url: string }) {
	return (
		<h2 className="area-title-container">
			<Link to={url}>
				{title}
				<img src={NextIcon} alt={`${title} 메뉴로 이동.`} />
			</Link>
		</h2>
	);
}

export default AreaTitle;
