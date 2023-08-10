import React, { useEffect, useState } from 'react';
import './CheckOnlineItem.scss';
import FormControlLabel from '@mui/material/FormControlLabel';
import IOSSwitch from 'components/atoms/common/ToggleButton/ToggleButton';
import { useRecoilState } from 'recoil';
import authState from 'recoil/auth';
import { IAuth } from 'types/auth';
import { toast } from 'react-hot-toast';

function CheckOnline() {
	const [auth, setAuth] = useRecoilState(authState);
	const [isActive, SetIsActive] = useState<boolean>(false);

	const onClick = () => {
		SetIsActive(!isActive);

		if (auth) {
			setAuth((prev: IAuth) => ({
				...prev,
				status: !prev.status,
			}));
		}
	};

	useEffect(() => {
		if (auth) SetIsActive(auth.status);
		if (auth.status) {
			toast.success('활동 상태 변경! 모든 컨설팅 요청을 수신합니다.');
		} else {
			toast.error('활동 상태 변경! 모든 컨설팅 요청을 차단합니다.');
		}
	}, [auth]);

	return (
		<div className="check-online-outer-box">
			<div className="check-online-box">
				<div className="active-management">
					<div className="bold-text">활동 관리</div>
					<FormControlLabel control={<IOSSwitch sx={{ m: 1 }} />} label="" onClick={onClick} />
				</div>
				<div>
					{isActive ? <div className="gray-text">현재 활동 중입니다.</div> : <div>현재 활동 중이 아닙니다.</div>}
					{isActive ? (
						<div className="gray-text">모든 컨설팅 요청을 수신합니다.</div>
					) : (
						<div>모든 컨설팅 요청을 수신하지 않습니다.</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default CheckOnline;
