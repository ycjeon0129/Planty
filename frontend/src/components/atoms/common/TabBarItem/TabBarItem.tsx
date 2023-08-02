import React from 'react';
import { Link } from 'react-router-dom';
import './TabBarItem.scss';
import TabMenu from 'constants/tabbar/TabBar';

function TabBarItem({ MenuKey }: { MenuKey: string }) {
	const Menu = TabMenu[MenuKey];
	return (
		<Link to={`/${MenuKey}`} className="menuBox">
			<div>
				<div className="iconBox">
					<img src={Menu.imgSrc} alt={Menu.imgName} />
					<span>{Menu.imgName}</span>
				</div>
			</div>
		</Link>
	);
}
export default TabBarItem;
