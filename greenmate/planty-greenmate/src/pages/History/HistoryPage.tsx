import PageHeader from 'components/organisms/common/PageHeader/PageHeader';
import HistoryPageLayout from 'components/layout/page/History/HistoryPageLayout/HistoryPageLayout';
import React from 'react';
import { Outlet } from 'react-router-dom';
import HISTORY_MENU from 'constants/menu/HistoryMenu';
import PageMenu from 'components/organisms/common/PageMenu/PageMenu';

function HistoryPage() {
	return (
		<HistoryPageLayout>
			<PageHeader text="이용내역 조회" />
			<PageMenu menu={HISTORY_MENU.default} />
			<Outlet />
		</HistoryPageLayout>
	);
}

export default HistoryPage;
