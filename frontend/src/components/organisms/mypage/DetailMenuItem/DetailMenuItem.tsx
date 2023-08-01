import React from 'react';
import './DetailMenuItem.scss';
import { ReactComponent as NextIcon } from 'assets/icons/Next.svg';
import { IDetail } from 'constants/menu/MypageMenuState';
import { Link, useNavigate } from 'react-router-dom';

function DetailMenuItem({ text, url = '', isToggle = false }: IDetail) {
	const navigator = useNavigate();

	if (isToggle) {
		return (
			<li className="detail-menu-item-container">
				<p>{text}</p>
				<div>토글</div>
			</li>
		);
	}

	return (
		<li className="detail-menu-item-container">
			<Link to={url}>{text}</Link>
			<button
				type="button"
				onClick={() => {
					navigator(url);
				}}
			>
				<NextIcon />
			</button>
		</li>
	);
}

export default DetailMenuItem;
