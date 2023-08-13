import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { ReactComponent as GoogleIcon } from 'assets/icons/Google.svg';
import './GoogleLoginButton.scss';
import useMovePage from 'hooks/useMovePage';
import LocalStorage from 'constants/storage/LocalStorage';

function GoogleLoginButton() {
	const { movePage } = useMovePage();

	const login = useGoogleLogin({
		onSuccess: () => {
			// TODO : 임의로 AT 대신, uid 1 저장
			LocalStorage.setItem('AccessToken', '1');
			movePage('/');
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
