import React, { ReactNode } from 'react';
import './ContentsLayout.scss';

function ContentsLayout({ children }: { children: ReactNode }) {
	return <div className="contentslayout-container">{children}</div>;
}

export default ContentsLayout;
