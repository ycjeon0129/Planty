import PageHeader from 'components/organisms/common/PageHeader/PageHeader';
import SubscribesPageLayout from 'components/layout/page/Subscribes/SubscribesPageLayout/SubscribesPageLayout';
import React from 'react';
import { Outlet } from 'react-router-dom';
import PageMenu from 'components/organisms/common/PageMenu/PageMenu';
import { SUBSCRIBES_MENU } from 'constants/subscribe/SubscribeMenu';

function SubscribesPage() {
	return (
		<SubscribesPageLayout>
			<PageHeader text="구독 관리" />
			<PageMenu menu={SUBSCRIBES_MENU.default} />
			<Outlet />
		</SubscribesPageLayout>
	);
}

export default SubscribesPage;
