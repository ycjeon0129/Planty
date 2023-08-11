import React, { ReactNode } from 'react';
import PageLayout from 'components/layout/common/PageLayout/PageLayout';
import NavigationLayout from 'components/layout/navigation/NavigationLayout/NavigationLayout';
import ContentsLayout from 'components/layout/common/ContentsLayout/ContentsLayout';
import './BookingManagementPageLayout.scss';

function BookingManagementPageLayout({ children }: { children: ReactNode[] }) {
	return (
		<PageLayout>
			{/* 페이지 헤더 */}
			<NavigationLayout>{children[0]}</NavigationLayout>
			<div className="booking-management-page-layout">
				<ContentsLayout id="calendar">
					{/* 전체 예약일정 영역 헤더 */}
					{children[1]}
					{/* 캘린더 */}
					{children[2]}
				</ContentsLayout>
				<ContentsLayout id="booking-list">
					{/* 지정일의 예약 목록 */}
					{children[3]}
					{/* 지정일 영역 헤더 */}
					{children[4]}
				</ContentsLayout>
			</div>
		</PageLayout>
	);
}

export default BookingManagementPageLayout;
