import React from 'react';
import './PageHeader.scss';

function PageHeader({ text }: { text: string }) {
	return <h1 className="pageheader-layout">{text}</h1>;
}

export default PageHeader;
