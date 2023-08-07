import PageHeader from 'components/atoms/common/PageHeader/PageHeader';
import HistoryPageLayout from 'components/layout/page/History/HistoryPageLayout/HistoryPageLayout';
import React from 'react';
import { Outlet } from 'react-router-dom';

function HistoryPage() {
	return (
		<HistoryPageLayout>
			<PageHeader text="이용내역 조회" />
			<Outlet />
		</HistoryPageLayout>
	);
}

export default HistoryPage;
