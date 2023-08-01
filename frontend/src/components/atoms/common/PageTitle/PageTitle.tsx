import React from 'react';
import './PageTitle.scss';

function PageTitle({ icon, text }: { icon: string; text: string }) {
	return (
		<div className="page-title">
			<div className="icon-wrap">
				<img src={icon} alt={text} height={14} width={14} />
			</div>
			<h1>{text}</h1>
		</div>
	);
}

export default PageTitle;
