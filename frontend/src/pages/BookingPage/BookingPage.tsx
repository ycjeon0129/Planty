import React from 'react';
import AreaTitle from 'components/atoms/common/AreaTitle/AreaTitle';
import BookingPageLayout from 'components/layout/Page/BookingPageLayout/BookingPageLayout';
import PageTitleButton from 'components/atoms/common/PageTitleButton/PageTitleButton';

function BookingPage() {
	return (
		<BookingPageLayout>
			{/* 페이지 헤더 */}
			<PageTitleButton type="back" text="예약 관리" />

			{/* 전체 예약 일정 */}
			<AreaTitle title="전체 예약 일정" url="#" />
		</BookingPageLayout>
	);
}

export default BookingPage;
