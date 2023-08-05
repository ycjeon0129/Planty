import React, { ReactNode } from 'react';
import './BookingPageLayout.scss';
import PageLayout from 'components/layout/common/PageLayout/PageLayout';
import NavigationLayout from 'components/layout/navigation/NavigationLayout/NavigationLayout';
import ContentsLayout from 'components/layout/common/ContentsLayout/ContentsLayout';

function BookingPageLayout({ children }: { children: ReactNode[] }) {
	return (
		<PageLayout>
			{/* 페이지 헤더 */}
			<NavigationLayout>{children[0]}</NavigationLayout>
			<div className="booking-management-page-layout">
				{/* 전체 예약 일정 */}
				<ContentsLayout id="calendar">
					{children[1]}
					{children[2]}
				</ContentsLayout>
				{children[3]}
				<ContentsLayout id="booking-list">
					{children[4]}
					{children[5]}
				</ContentsLayout>
			</div>
		</PageLayout>
	);
}

export default BookingPageLayout;
