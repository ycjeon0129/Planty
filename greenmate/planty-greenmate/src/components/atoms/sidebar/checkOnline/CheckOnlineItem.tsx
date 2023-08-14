/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import './CheckOnlineItem.scss';
import FormControlLabel from '@mui/material/FormControlLabel';
import IOSSwitch from 'components/atoms/common/ToggleButton/ToggleButton';
import { useRecoilState } from 'recoil';
import { activityState } from 'recoil/auth';

function CheckOnline() {
	const [activity, setActivity] = useRecoilState(activityState);
	const [message, setMessage] = useState('');

	const onClick = () => {
		if (activity) setActivity(false);
		else setActivity(true);
	};

	const changeMessage = () => {
		if (activity) {
			setMessage('현재 활동 중 입니다. \n모든 컨설팅 요청을 수신합니다.');
		} else {
			setMessage('현재 활동 중이 아닙니다.\n모든 컨설팅 요청을 수신하지 않습니다.');
		}
	};

	useEffect(() => {
		changeMessage();
	}, [activity]);

	return (
		<div className="check-online-outer-box">
			<div className="check-online-box">
				<div className="active-management">
					<div className="bold-text">활동 관리</div>
					<FormControlLabel control={<IOSSwitch defaultChecked={activity} />} label="" onClick={onClick} />
				</div>
				<div>
					<div className="gray-text">{message}</div>
				</div>
			</div>
		</div>
	);
}

export default CheckOnline;
