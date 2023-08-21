import React, { ReactNode } from 'react';
import './ConsultingPageLayout.scss';
import ContentsLayout from 'components/layout/common/ContentsLayout/ContentsLayout';

function ConsultingPageLayout({ children }: { children: ReactNode[] }) {
	return (
		<ContentsLayout id="consulting-list-contents-layout">
			<div className="consulting-page-layout-container">
				<div id="consulting-list">{children[0]}</div>
				<div id="consulting-list">{children[1]}</div>
			</div>
		</ContentsLayout>
	);
}

export default ConsultingPageLayout;
