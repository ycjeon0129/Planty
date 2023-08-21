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
			<div className="booking-page-layout">
				{/* 날짜 선택  */}
				<ContentsLayout id="calendar">
					{children[1]}
					{children[2]}
				</ContentsLayout>

				{/* 시간 선택 */}
				<ContentsLayout id="time">
					{children[3]}
					{children[4]}
				</ContentsLayout>

				{/* 예약하기 버튼 */}
				<div id="btn-container">{children[5]}</div>
			</div>
		</PageLayout>
	);
}

export default BookingPageLayout;
