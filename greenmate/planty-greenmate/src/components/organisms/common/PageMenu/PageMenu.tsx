import { Button } from '@mui/material';
import { IMenuItem } from 'constants/subscribe/SubscribeMenu';
import useMovePage from 'hooks/useMovePage';
import React, { useState } from 'react';
import './PageMenu.scss';

function PageMenu({ menu }: { menu: IMenuItem[] }) {
	const { movePage } = useMovePage();
	const [nowMenu, setNowMenu] = useState(0);

	const handleButton = (m: IMenuItem) => {
		setNowMenu(m.idx);
		movePage(m.url);
	};

	return (
		<div className="page-menu-container">
			{menu.map((m: IMenuItem) => (
				<Button variant={nowMenu === m.idx ? 'contained' : 'outlined'} onClick={() => handleButton(m)} color="success">
					{m.title}
				</Button>
			))}
		</div>
	);
}

export default PageMenu;
