import PageHeader from 'components/organisms/common/PageHeader/PageHeader';
import DashBoardPageLayout from 'components/layout/page/DashBoard/DashBoardPageLayout/DashBoardPageLayout';
import React from 'react';
import SubscribesList from 'components/organisms/subscribes/SubscribesList/SubscribesList';
import BookingList from 'components/organisms/subscribes/BookingList/BookingList';
import AreaTitle from 'components/atoms/common/AreaTitle/AreaTitle';
import CurrentConsulting from 'components/atoms/dashboard/CurrentConsulting/CurrentConsulting';

function DashBoardPage() {
	return (
		<DashBoardPageLayout>
			<PageHeader text="대시보드" />
			<CurrentConsulting />
			<AreaTitle title="현재 관리중인 구독" url="/admin/subscribes" />
			{/* map으로 데이터 돌리면서 하나씩 보여주기 */}
			<SubscribesList />
			<AreaTitle title="다가오는 컨설팅" url="/admin/history" />
			<BookingList />
		</DashBoardPageLayout>
	);
}

export default DashBoardPage;
