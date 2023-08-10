import React, { useState } from 'react';
import './LoginForm.scss';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import ClearIcon from '@mui/icons-material/Clear';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from 'components/atoms/common/Button/Button';
import { loginApi } from 'utils/api/auth';
import { useRecoilState } from 'recoil';
import authState from 'recoil/auth';
import useMovePage from 'hooks/useMovePage';
import { IAuth } from 'types/auth';

function LoginForm() {
	const [, setAuth] = useRecoilState(authState);
	const { movePage } = useMovePage();
	const [id, setId] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);

	const handleClearId = () => {
		setId('');
	};
	const handleClickShowPassword = () => setShowPassword((show) => !show);
	const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
	};

	const login = async () => {
		const body = {
			id,
			password,
		};

		try {
			console.log('로그인 시도 :', body);
			const response = await loginApi(body);
			console.log(response);

			// 로그인 성공 시
			if (response.status === 200) {
				const info: IAuth = {
					nickname: '',
					id: '',
					status: false,
					profilePhoto: '',
					joinDate: '',
					introduce: '',
					currentConsulting: null,
				};

				setAuth(info);
				console.log('로그인 성공');

				movePage('/');
			}
		} catch (error) {
			console.error('에러', error);
			alert('로그인 실패 !');
		}
	};

	return (
		<Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
			{/* 아이디 input */}
			<FormControl sx={{ m: 1, width: '53ch' }} variant="outlined">
				<InputLabel htmlFor="outlined-adornment-id">ID</InputLabel>
				<OutlinedInput
					id="outlined-adornment-id"
					type="id"
					value={id}
					onChange={(e) => setId(e.target.value)}
					endAdornment={
						<InputAdornment position="end">
							<IconButton
								aria-label="toggle id visibility"
								onClick={() => {
									handleClearId();
								}}
								onMouseDown={handleMouseDownPassword}
								edge="end"
							>
								<ClearIcon />
							</IconButton>
						</InputAdornment>
					}
					label="ID"
				/>
			</FormControl>

			{/* 비밀번호 input */}
			<FormControl sx={{ m: 1, width: '53ch' }} variant="outlined">
				<InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
				<OutlinedInput
					id="outlined-adornment-password"
					type={showPassword ? 'text' : 'password'}
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					endAdornment={
						<InputAdornment position="end">
							<IconButton
								aria-label="toggle password visibility"
								onClick={handleClickShowPassword}
								onMouseDown={handleMouseDownPassword}
								edge="end"
							>
								{showPassword ? <VisibilityOff /> : <Visibility />}
							</IconButton>
						</InputAdornment>
					}
					label="Password"
				/>

				{/* 로그인 상태 유지 */}
				<div className="auto-login">
					<FormControlLabel
						control={<Checkbox defaultChecked style={{ color: '#03c75a' }} />}
						label="로그인 상태 유지"
					/>
				</div>

				{/* 로그인 버튼 */}
				<Button isActive text="로그인" handleClick={login} />
			</FormControl>
		</Box>
	);
}

export default LoginForm;
