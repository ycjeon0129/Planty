import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import './GoogleLoginButton.scss';

function GoogleLoginButton() {
	const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID as string;

	const onSuccess = () => {
		alert('success');
	};

	const onError = () => {
		alert('failure');
	};

	return (
		<GoogleOAuthProvider clientId={clientId}>
			<GoogleLogin onSuccess={onSuccess} onError={onError} />
		</GoogleOAuthProvider>
	);
}

export default GoogleLoginButton;
