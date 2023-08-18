import EmergencyPageLayout from 'components/layout/page/History/EmergencyPageLayout/EmergencyPageLayout';
import EmergencyList from 'components/organisms/history/EmergencyList/EmergencyList';
import React from 'react';
import { Outlet } from 'react-router-dom';

function EmergencyPage() {
	return (
		<EmergencyPageLayout>
			<EmergencyList />
			<Outlet />
		</EmergencyPageLayout>
	);
}

export default EmergencyPage;
