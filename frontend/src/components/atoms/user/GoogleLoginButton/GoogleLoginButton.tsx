import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { ReactComponent as GoogleIcon } from 'assets/icons/Google.svg';
import './GoogleLoginButton.scss';

function GoogleLoginButton() {
	const login = useGoogleLogin({
		onSuccess: (tokenResponse) => {
			axios
				.post(`http://localhost:8080/api/users/social-local`, { code: tokenResponse.code })
				.then((res) => console.log(res));
		},
		flow: 'auth-code',
	});

	return (
		<div className="google-login-button-container">
			<GoogleIcon />
			<button type="button" onClick={() => login()}>
				Google 계정으로 로그인 하기
			</button>
		</div>
	);
}

export default GoogleLoginButton;
