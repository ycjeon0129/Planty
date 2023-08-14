/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import './CheckOnlineItem.scss';
import { useRecoilState } from 'recoil';
import { activityState } from 'recoil/auth';
import { Switch } from '@mui/material';
import { saveActivityStateApi } from 'utils/api/auth';
import { toast } from 'react-hot-toast';

function CheckOnline() {
	const [activity] = useRecoilState(activityState);
	const [message, setMessage] = useState('');

	const changeMessage = (state: boolean) => {
		if (state) {
			setMessage('현재 활동 중 입니다. \n모든 컨설팅 요청을 수신합니다.');
		} else {
			setMessage('현재 활동 중이 아닙니다.\n모든 컨설팅 요청을 수신하지 않습니다.');
		}
	};

	const changeActivityState = async () => {
		try {
			const response = await saveActivityStateApi();
			if (response.status === 200) {
				changeMessage(response.data.active);
				console.log('활동상태 변경', response.data.active);
				toast.success('활동 상태 변경 완료😀');
			}
		} catch (error) {
			toast.error('활동 상태 변경에 실패했습니다😥 잠시 후 다시 시도하세요.');
			console.error(error);
		}
	};

	useEffect(() => {
		changeMessage(activity);
	}, [activity]);

	return (
		<div className="check-online-outer-box">
			<div className="check-online-box">
				<div className="active-management">
					<div className="bold-text">활동 관리</div>
					<Switch defaultChecked={activity} onClick={changeActivityState} />
				</div>
				<div>
					<div className="gray-text">{message}</div>
				</div>
			</div>
		</div>
	);
}

export default CheckOnline;
