import PageHeader from 'components/organisms/common/PageHeader/PageHeader';
import SettingPageLayout from 'components/layout/page/Setting/SettingPageLayout/SettingPageLayout';
import React from 'react';
import Profile from 'components/atoms/common/Profile/Profile';
import SettingList from 'components/organisms/common/SettingList/SettingList';

function SettingPage() {
	return (
		<SettingPageLayout>
			<PageHeader text="설정" />
			<Profile />
			<SettingList />
		</SettingPageLayout>
	);
}

export default SettingPage;
