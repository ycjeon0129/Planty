/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import './ActivityManagement.scss';
import { ReactComponent as Refresh } from 'assets/icons/Refresh.svg';
import { useRecoilState } from 'recoil';
import { activityState } from 'recoil/auth';
import { Switch } from '@mui/material';
import { findActivityStateApi, saveActivityStateApi } from 'utils/api/auth';
import { toast } from 'react-hot-toast';

function ActivityManagement({ refreshRequests }: { refreshRequests: () => void }) {
	const [activity, setActivity] = useRecoilState(activityState);
	const [message, setMessage] = useState('');

	// 활동 관련 메시지를 변경하는 함수
	const changeMessage = (state: boolean) => {
		if (state) {
			setMessage('현재 활동 중 입니다. \n모든 컨설팅 요청을 수신합니다.');
		} else {
			setMessage('현재 활동 중이 아닙니다.\n모든 컨설팅 요청을 수신하지 않습니다.');
		}
	};

	// 토글 스위치 클릭 시, 서버와 로컬의 활동 상태 변경
	const changeActivityState = async () => {
		try {
			const response = await saveActivityStateApi();
			if (response.status === 200) {
				changeMessage(response.data.active);
				setActivity(response.data.active);
				console.log('활동상태 변경', response.data);
				toast.success('활동 상태 변경 완료😀');
			}
		} catch (error) {
			toast.error('활동 상태 변경에 실패했습니다😥 잠시 후 다시 시도하세요.');
			console.error(error);
		}
	};

	// 최초 컴포넌트 마운트 시, 서버에서 내 활동상태를 받아와서 반영
	const initActivityState = async () => {
		try {
			const response = await findActivityStateApi();
			if (response.status === 200) {
				changeMessage(response.data.active);
				setActivity(response.data.active);
			}
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		initActivityState();
	}, []);

	return (
		<div className="check-online-outer-box">
			<div className="check-online-box">
				<div className="active-management">
					<div className="bold-text flex">
						활동 관리
						{activity ? (
							<button type="button" onClick={refreshRequests}>
								<Refresh />
							</button>
						) : (
							<div />
						)}
					</div>
					<Switch checked={activity} onChange={changeActivityState} inputProps={{ 'aria-label': 'controlled' }} />
				</div>
				<div>
					<div className="gray-text">{message}</div>
				</div>
			</div>
		</div>
	);
}

export default ActivityManagement;
