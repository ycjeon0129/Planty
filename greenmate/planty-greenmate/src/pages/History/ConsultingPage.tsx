import ConsultingPageLayout from 'components/layout/page/History/ConsultingPageLayout/ConsultingPageLayout';
import SubscribesList from 'components/organisms/subscribes/SubscribesList/SubscribesList';
import React from 'react';
import { Outlet } from 'react-router-dom';

function ConsultingPage() {
	return (
		<ConsultingPageLayout>
			<SubscribesList />
			<Outlet />
		</ConsultingPageLayout>
	);
}

export default ConsultingPage;
