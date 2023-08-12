import PageHeader from 'components/organisms/common/PageHeader/PageHeader';
import SettingPageLayout from 'components/layout/page/Setting/SettingPageLayout/SettingPageLayout';
import React from 'react';
import Profile from 'components/atoms/common/Profile/Profile';
import GreenmateSetting from 'components/atoms/common/GreenmateSetting/GreenmateSetting';

const settingData: string[] = ['이용약관', '개인정보 처리방침', '자주 묻는 질문', '버젼 정보'];

function SettingPage() {
	return (
		<SettingPageLayout>
			<PageHeader text="설정" />
			<Profile />
			{settingData.map((title) => (
				<GreenmateSetting key={title} settingMenu={title} />
			))}
		</SettingPageLayout>
	);
}

export default SettingPage;
