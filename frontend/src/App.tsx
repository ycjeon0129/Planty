/* eslint-disable no-tabs */
import AppRouter from 'router/AppRouter';
import React from 'react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';

import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import { RecoilRoot } from 'recoil';

SwiperCore.use([Navigation, Autoplay]);

function App() {
	return (
		<RecoilRoot>
			<AppRouter />
		</RecoilRoot>
	);
}

export default App;
