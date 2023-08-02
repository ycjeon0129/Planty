import React from 'react';
import SubscribePageLayout from 'components/layout/subscirbe/SubscribePageLayout/SubscribePageLayout';
import { Outlet } from 'react-router-dom';

function SubscribePage() {
	return (
		<SubscribePageLayout>
			<Outlet />
		</SubscribePageLayout>
	);
}

export default SubscribePage;
