import PageHeader from 'components/organisms/common/PageHeader/PageHeader';
import SettingPageLayout from 'components/layout/page/Setting/SettingPageLayout/SettingPageLayout';
import React from 'react';
import Profile from 'components/atoms/common/Profile/Profile';
import GreenmateSetting from 'components/atoms/common/GreenmateSetting/GreenmateSetting';

function SettingPage() {
	return (
		<SettingPageLayout>
			<PageHeader text="설정" />
			<Profile />
			<GreenmateSetting />
			<div>3</div>
		</SettingPageLayout>
	);
}

export default SettingPage;
