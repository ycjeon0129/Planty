import React from 'react';
// import { useGoogleLogin } from '@react-oauth/google';
// import { ReactComponent as GoogleIcon } from 'assets/icons/Google.svg';
// import LocalStorage from 'constants/storage/LocalStorage';
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import { socialLoginApi } from 'utils/api/auth';

// function GoogleLoginButton() {
// 	const login = useGoogleLogin({
// 		onSuccess: () => {
// 			// TODO : 임의로 AT 대신, uid 1 저장
// 			LocalStorage.setItem('AccessToken', '1');
// 			window.location.href = '/';
// 		},
// 		flow: 'auth-code',
// 	});

// 	return (
// 		<div className="google-login-button-container">
// 			<GoogleIcon />
// 			<button type="button" onClick={() => login()}>
// 				Google 계정으로 로그인 하기
// 			</button>
// 		</div>
// 	);
// }

function GoogleLoginButton() {
	const onSuccess = async (res: CredentialResponse) => {
		try {
			const response = await socialLoginApi(res);
			console.log(response);
		} catch (error) {
			console.error(error);
		}
	};

	const onError = () => {
		console.log('error');
	};
	return <GoogleLogin width="400px" logo_alignment="center" onSuccess={onSuccess} onError={onError} />;
}

export default GoogleLoginButton;
