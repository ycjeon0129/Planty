import React from 'react';
import './SettingList.scss';
import GreenmateSetting from 'components/atoms/common/GreenmateSetting/GreenmateSetting';

function SettingList() {
	const settingData: string[] = ['이용약관', '개인정보 처리방침', '환경 설정', '버젼 정보', '찾아오는 길'];
	return (
		<div>
			{settingData.map((title) => (
				<GreenmateSetting key={title} settingMenu={title} />
			))}
		</div>
	);
}

export default SettingList;
