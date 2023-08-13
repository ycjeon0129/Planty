import React, { useState } from 'react';
import './DetailMenuItem.scss';
import { ReactComponent as NextIcon } from 'assets/icons/Next.svg';
import { IDetail } from 'constants/menu/MypageMenuState';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import FormControlLabel from '@mui/material/FormControlLabel';
import IOSSwitch from 'components/atoms/common/ToggleButton/ToggleButton';

function DetailMenuItem({ text, url = '', isToggle = false }: IDetail) {
	const navigator = useNavigate();
	const [isActive, SetIsActive] = useState<boolean>(false);
	const onClick = () => {
		SetIsActive(!isActive);
		toast.success('서비스 개발 중입니다');
	};

	if (isToggle) {
		return (
			<li className="detail-menu-item-container">
				<p>{text}</p>
				<FormControlLabel control={<IOSSwitch sx={{ m: 1 }} />} label="" onClick={onClick} />
			</li>
		);
	}

	if (url === '/') {
		return (
			<li className="detail-menu-item-container">
				<div className="menu-text-font">{text}</div>
				<button
					type="button"
					onClick={() => {
						toast.success('서비스 개발 중입니다.');
					}}
				>
					<NextIcon />
				</button>
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
