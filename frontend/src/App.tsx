/* eslint-disable no-tabs */
import AppRouter from 'router/AppRouter';
import React from 'react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
import { GoogleOAuthProvider } from '@react-oauth/google';

import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import { RecoilRoot } from 'recoil';

SwiperCore.use([Navigation, Autoplay]);
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

function App() {
	const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID as string;

	return (
		<RecoilRoot>
			<GoogleOAuthProvider clientId={clientId}>
				<AppRouter />
			</GoogleOAuthProvider>
		</RecoilRoot>
	);
}

export default App;
