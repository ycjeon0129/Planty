import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TabBarItem.scss';
import TabMenu from 'constants/tabbar/TabBar';

interface TabBarItemProps {
	MenuKey: string;
}

function TabBarItem({ MenuKey }: TabBarItemProps) {
	const Menu = TabMenu[MenuKey];
	const [isActive, setIsActive] = useState(true);

	const handleLinkClick = () => {
		if (isActive) {
			setIsActive(false);
		}
	};

	const imageSource = isActive ? Menu.imgSrc.isActive : Menu.imgSrc.unActive;

	return (
		<Link to={`/${MenuKey}`} className="menu-box" onClick={handleLinkClick}>
			<div>
				<div className="icon-box">
					<img src={imageSource} alt={Menu.imgName} />
					<span>{Menu.imgName}</span>
				</div>
			</div>
		</Link>
	);
}

export default TabBarItem;
