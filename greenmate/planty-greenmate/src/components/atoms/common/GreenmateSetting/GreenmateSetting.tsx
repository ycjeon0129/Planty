import React from 'react';
import './GreenmateSetting.scss';
import NextIcon from 'assets/icons/Next.svg';
// import { ISettingMenu } from 'types/base/dummy';

function GreenmateSetting() {
	// ISettingMenu[]가 아닌 ISettingMenu로 수정
	return (
		<div className="greenmate-setting-box">
			<div className="gray-text">다시하기</div>
			<div>
				<img src={NextIcon} alt="꺽새" />
			</div>
		</div>
	);
}

export default GreenmateSetting;
