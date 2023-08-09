import { Button } from '@mui/material';
import useMovePage from 'hooks/useMovePage';
import { IMenuItem } from 'types/global';
import React, { useState } from 'react';
import uuid from 'react-uuid';
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
