import PageHeader from 'components/atoms/common/PageHeader/PageHeader';
import SubscribesPageLayout from 'components/layout/page/Subscribes/SubscribesPageLayout/SubscribesPageLayout';
import React from 'react';
import { Outlet } from 'react-router-dom';

function SubscribesPage() {
	return (
		<SubscribesPageLayout>
			<PageHeader text="구독 관리" />
			<Outlet />
		</SubscribesPageLayout>
	);
}

export default SubscribesPage;
