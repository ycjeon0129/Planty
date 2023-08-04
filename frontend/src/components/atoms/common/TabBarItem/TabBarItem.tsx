import React, { useState, useEffect } from 'react';
import { MENUS } from 'constants/tabbar/TabBar';
import { Link, useLocation } from 'react-router-dom';
import './TabBarItem.scss';
import classNames from 'classnames';

function TabBarItem({ menuKey }: { menuKey: string }) {
	const [isActive, setIsActive] = useState<boolean>(false);
	const location = useLocation();
	const className = classNames('icon-box', { active: isActive });

	useEffect(() => {
		setIsActive(location.pathname.includes(`/${menuKey}`));
	}, [location.pathname, menuKey]);

	return (
		<Link to={`/${menuKey}`} className="menu-box" onClick={() => setIsActive(true)}>
			<div>
				<div className={className}>
					{MENUS[menuKey].icon}
					{isActive ? <span className="green">{MENUS[menuKey].menu}</span> : <span>{MENUS[menuKey].menu}</span>}
				</div>
			</div>
		</Link>
	);
}

export default TabBarItem;
