import React from 'react';
import AreaTitle from 'components/atoms/common/AreaTitle/AreaTitle';
import BookingPageLayout from 'components/layout/Page/BookingPageLayout/BookingPageLayout';
import PageTitleButton from 'components/atoms/common/PageTitleButton/PageTitleButton';
import CustomCalendar from 'components/atoms/booking/CustomCalendar/CustomCalendar';
import useSelectedDate from 'hooks/useSelectedDate';
import BookingList from 'components/organisms/booking/BookingList';
import SubscribeStateBadge from 'components/atoms/subscribe/SubscribeStateBadge/SubscribeStateBadge';
import BadgeDescription from 'components/organisms/common/BadgeDescription/BadgeDescription';
import { BOOKING_STATUS_DESC_LIST } from 'constants/common/StatusDescList';

function BookingPage() {
	const [date, setDate, formatDate] = useSelectedDate();

	const badgeList = [
		<SubscribeStateBadge stateKey="done" />,
		<SubscribeStateBadge stateKey="join" />,
		<SubscribeStateBadge stateKey="notJoin" />,
	];

	return (
		<BookingPageLayout>
			{/* 페이지 헤더 */}
			<PageTitleButton type="back" text="예약 관리" />
			{/* 전체 예약일정 영역 헤더 */}
			<AreaTitle title="전체 예약 일정" url="#" />
			{/* 캘린더 */}
			<CustomCalendar selectedDate={date} setSelectedDate={setDate} />
			{/* 지정일 예약목록 */}
			<AreaTitle title={`${formatDate as string}  예약 목록`} url="#" />
			<BadgeDescription title="예약 상태" descriptionList={BOOKING_STATUS_DESC_LIST} badgeList={badgeList} />
			<BookingList />
		</BookingPageLayout>
	);
}

export default BookingPage;
