import React, { ReactNode } from 'react';
import './ContentsLayout.scss';

function ContentsLayout({ children, id }: { children: ReactNode; id: string }) {
	return (
		<div id={id} className="contentslayout-container">
			{children}
		</div>
	);
}

export default ContentsLayout;
