import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './TabBarItem.scss';
import TabMenu from 'constants/tabbar/TabBar';

interface TabBarItemProps {
	MenuKey: string;
}

function TabBarItem({ MenuKey }: TabBarItemProps) {
	const Menu = TabMenu[MenuKey];
	const location = useLocation();
	const [isActive, setIsActive] = useState<boolean>(false);

	useEffect(() => {
		// Check if the current URL matches the MenuKey
		setIsActive(location.pathname === `/${MenuKey}`);
	}, [location.pathname, MenuKey]);

	const handleLinkClick = () => {
		setIsActive(true); // Always set isActive to true when the link is clicked to make the image active
	};

	const imageSource = isActive ? Menu.imgSrc.isActive : Menu.imgSrc.unActive;

	return (
		<Link to={`/${MenuKey}`} className="menu-box" onClick={handleLinkClick}>
			<div>
				<div className="icon-box">
					<img src={imageSource} alt={Menu.imgName} />
					{isActive ? <span className="green">{Menu.imgName}</span> : <span>{Menu.imgName}</span>}
				</div>
			</div>
		</Link>
	);
}

export default TabBarItem;
