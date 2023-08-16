import React, { ReactNode } from 'react';
import './ConsultingCompletePageLayout.scss';

function ConsultingCompletePageLayout({ children }: { children: ReactNode[] }) {
	return (
		<div className="consulting-complete-page-layout-container">
			<div id="lottie">{children[0]}</div>
			<div id="message">
				{children[1]}
				{children[2]}
			</div>
			<div id="advice-input">{children[3]}</div>
			<div id="return-button">{children[4]}</div>
		</div>
	);
}

export default ConsultingCompletePageLayout;
