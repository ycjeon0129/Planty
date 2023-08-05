import React, { ReactNode } from 'react';
import './NavigationLayout.scss';

function NavigationLayout({ children }: { children: ReactNode }) {
	return (
		<div className="navigation">
			<div>{children}</div>
		</div>
	);
}

export default NavigationLayout;
