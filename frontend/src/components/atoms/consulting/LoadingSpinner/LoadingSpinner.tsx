// npm install react-spinners --save
import { SyncLoader } from 'react-spinners';
import React from 'react';

function LoadingSpinner() {
	return <SyncLoader color="#36d7b7" margin={10} size={20} speedMultiplier={0.8} />;
}

export default LoadingSpinner;
