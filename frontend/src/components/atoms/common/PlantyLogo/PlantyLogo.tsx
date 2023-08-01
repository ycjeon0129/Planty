import React from 'react';
import { ReactComponent as PlantyLogo } from '../../../../assets/icons/logo/PlantyLogo.svg';
import './PlantyLogo.scss';

// Planty 로고 다시 정할 것

function Header() {
	return (
		<div>
			<div className="normal">
				<div className="logoBox">
					<PlantyLogo />
				</div>
			</div>
			<div className="darkMode">
				<div className="logoBox">
					<PlantyLogo fill="white" />
				</div>
			</div>
		</div>
	);
}

export default Header;
