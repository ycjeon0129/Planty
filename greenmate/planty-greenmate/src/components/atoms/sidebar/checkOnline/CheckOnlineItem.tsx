import React, { useState } from 'react';
import './CheckOnlineItem.scss';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch, { SwitchProps } from '@mui/material/Switch';

const IOSSwitch = styled((props: SwitchProps) => (
	// eslint-disable-next-line react/jsx-props-no-spreading
	<Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
	width: 42,
	height: 26,
	padding: 0,
	'& .MuiSwitch-switchBase': {
		padding: 0,
		margin: 2,
		transitionDuration: '300ms',
		'&.Mui-checked': {
			transform: 'translateX(16px)',
			color: '#fff',
			'& + .MuiSwitch-track': {
				backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
				opacity: 1,
				border: 0,
			},
			'&.Mui-disabled + .MuiSwitch-track': {
				opacity: 0.5,
			},
		},
		'&.Mui-focusVisible .MuiSwitch-thumb': {
			color: '#33cf4d',
			border: '6px solid #fff',
		},
		'&.Mui-disabled .MuiSwitch-thumb': {
			color: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600],
		},
		'&.Mui-disabled + .MuiSwitch-track': {
			opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
		},
	},
	'& .MuiSwitch-thumb': {
		boxSizing: 'border-box',
		width: 22,
		height: 22,
	},
	'& .MuiSwitch-track': {
		borderRadius: 26 / 2,
		backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
		opacity: 1,
		transition: theme.transitions.create(['background-color'], {
			duration: 500,
		}),
	},
}));

function CheckOnline() {
	const [isActive, SetIsActive] = useState<boolean>(true);
	const Click = () => {
		SetIsActive(!isActive);
		console.log(isActive);
	};

	return (
		<div className="check-online-outer-box">
			<div className="check-online-box">
				<div className="active-management">
					<div className="bold-text">활동 관리</div>
					<FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />} label="" onClick={Click} />
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
