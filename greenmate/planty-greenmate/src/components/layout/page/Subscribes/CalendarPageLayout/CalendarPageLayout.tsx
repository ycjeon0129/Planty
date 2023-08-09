import React, { ReactNode } from 'react';
import './CalendarPageLayout.scss';
import ContentsLayout from 'components/layout/common/ContentsLayout/ContentsLayout';

function CalendarPageLayout({ children }: { children: ReactNode[] }) {
	return (
		<div className="calendar-page-layout-container">
			<ContentsLayout id="calendar">{children[0]}</ContentsLayout>
			<ContentsLayout id="booking-list">{children[1]}</ContentsLayout>
		</div>
	);
}

export default CalendarPageLayout;
