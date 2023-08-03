import React from 'react';
import AreaTitle from 'components/atoms/common/AreaTitle/AreaTitle';
import BookingPageLayout from 'components/layout/Page/BookingPageLayout/BookingPageLayout';
import PageTitleButton from 'components/atoms/common/PageTitleButton/PageTitleButton';
import CustomCalendar from 'components/atoms/booking/CustomCalendar/CustomCalendar';
import useSelectedDate from 'hooks/useSelectedDate';
import ContentsLayout from 'components/layout/common/ContentsLayout/ContentsLayout';

function BookingPage() {
	const [date, setDate, formatDate] = useSelectedDate();

	return (
		<BookingPageLayout>
			{/* 페이지 헤더 */}
			<PageTitleButton type="back" text="예약 관리" />

			{/* 전체 예약 일정 */}
			<AreaTitle title="전체 예약 일정" url="#" />

			{/* 캘린더 */}
			<ContentsLayout id="calendar">
				<CustomCalendar selectedDate={date} setSelectedDate={setDate} />
			</ContentsLayout>

			{/* 지정일 예약목록 */}
			<AreaTitle title={`${formatDate as string}  예약 목록`} url="#" />
			<ContentsLayout id="booking-list"> gd</ContentsLayout>
		</BookingPageLayout>
	);
}

export default BookingPage;
