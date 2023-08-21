import ListPageLayout from 'components/layout/page/Subscribes/ListPageLayout/ListPageLayout';
import { Outlet } from 'react-router-dom';
import React from 'react';
import SubscribesList from 'components/organisms/subscribes/SubscribesList/SubscribesList';

function ListPage() {
	return (
		<ListPageLayout>
			<SubscribesList />
			<Outlet />
		</ListPageLayout>
	);
}

export default ListPage;
