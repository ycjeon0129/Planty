import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import './GoogleLoginButton.scss';

function GoogleLoginButton() {
	const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID as string;

	const onSuccess = (credentialResponse: object) => {
		alert('success');
		console.log(credentialResponse);
	};

	const onError = () => {
		alert('failure');
	};

	return (
		<GoogleOAuthProvider clientId={clientId}>
			<GoogleLogin width="400px" logo_alignment="center" onSuccess={onSuccess} onError={onError} />
		</GoogleOAuthProvider>
	);
}

export default GoogleLoginButton;
