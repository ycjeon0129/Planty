import React from 'react';
import { GoogleLogin } from 'react-google-login';
import './GoogleLoginButton.scss';

function GoogleLoginButton() {
	const clientId = `539118426337-eb63e74i3d00iltcmtcftu7qdc71r175.apps.googleusercontent.com`;

	const onSuccess = () => {
		alert('success');
	};

	const onFailure = () => {
		alert('failure');
	};

	return (
		<div className="google-login-button-container">
			<GoogleLogin
				clientId={clientId}
				buttonText="Google 계정으로 시작하기"
				onSuccess={onSuccess}
				onFailure={onFailure}
			/>
		</div>
	);
}

export default GoogleLoginButton;
