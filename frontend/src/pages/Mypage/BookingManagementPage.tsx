import React from 'react';
import AreaTitle from 'components/atoms/common/AreaTitle/AreaTitle';
import BookingManagementPageLayout from 'components/layout/Page/BookingManagementPageLayout/BookingManagementPageLayout';
import PageTitleButton from 'components/atoms/common/PageTitleButton/PageTitleButton';
import CustomCalendar from 'components/atoms/booking/FullScheduleCalendar/FullScheduleCalendar';
import useSelectedDate from 'hooks/useSelectedDate';
import BookingList from 'components/organisms/booking/BookingList/BookingList';

function BookingManagement() {
	const [date, setDate, formatDate] = useSelectedDate();

	return (
		<BookingManagementPageLayout>
			{/* 페이지 헤더 */}
			<PageTitleButton type="back" text="예약 관리" url="/mypage" />
			{/* 전체 예약일정 영역 헤더 */}
			<AreaTitle title="전체 예약 일정" url="#" />
			{/* 캘린더 */}
			<CustomCalendar selectedDate={date} setSelectedDate={setDate} />
			{/* 지정일 영역 헤더 */}
			<AreaTitle title={`${formatDate as string}  예약 목록`} url="#" />
			{/* 지정일의 예약 목록 */}
			<BookingList />
		</BookingManagementPageLayout>
	);
}

export default BookingManagement;
