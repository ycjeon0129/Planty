import React from 'react';
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
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function LoginForm() {
	// const [deleteId, SetDeleteId] = React.useState(true);
	const [id, setId] = React.useState('');
	const handleClearId = () => {
		setId('');
	};

	const [showPassword, setShowPassword] = React.useState(false);
	const handleClickShowPassword = () => setShowPassword((show) => !show);
	const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
	};

	return (
		<div className="login-form-outer-box">
			<Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
				<div>
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
						/>
					</FormControl>
				</div>
				<div>
					<FormControl sx={{ m: 1, width: '53ch' }} variant="outlined">
						<InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
						<OutlinedInput
							id="outlined-adornment-password"
							type={showPassword ? 'text' : 'password'}
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
					</FormControl>
				</div>
			</Box>
			<FormGroup className="form-group">
				<FormControlLabel control={<Checkbox defaultChecked style={{ color: '#03c75a' }} />} label="로그인 상태 유지" />
			</FormGroup>
		</div>
	);
}

export default LoginForm;
