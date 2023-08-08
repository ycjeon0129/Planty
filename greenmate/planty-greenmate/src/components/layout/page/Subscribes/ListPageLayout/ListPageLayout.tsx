import React, { ReactNode } from 'react';
import './ListPageLayout.scss';

function ListPageLayout({ children }: { children: ReactNode }) {
	return <div>{children}</div>;
}

export default ListPageLayout;
