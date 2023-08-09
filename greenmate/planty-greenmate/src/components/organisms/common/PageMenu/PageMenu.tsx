import { Button } from '@mui/material';
import useMovePage from 'hooks/useMovePage';
import { IMenuItem } from 'types/global';
import React, { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import './PageMenu.scss';
import { useLocation } from 'react-router-dom';

function PageMenu({ menu }: { menu: IMenuItem[] }) {
	const { movePage } = useMovePage();
	const location = useLocation();
	const [nowMenu, setNowMenu] = useState(0);

	const handleButton = (m: IMenuItem) => {
		setNowMenu(m.idx);
		movePage(m.url);
	};

	useEffect(() => {
		const pathname = location.pathname.split('/')[2];
		if (pathname === 'list') setNowMenu(0);
		else if (pathname === 'calendar') setNowMenu(1);
	}, [location]);
	return (
		<div className="page-menu-container">
			{menu.map((m: IMenuItem) => (
				<Button
					key={uuid()}
					variant={nowMenu === m.idx ? 'contained' : 'outlined'}
					onClick={() => handleButton(m)}
					color="success"
				>
					{m.title}
				</Button>
			))}
		</div>
	);
}

export default PageMenu;
