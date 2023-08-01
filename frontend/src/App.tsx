/* eslint-disable no-tabs */
import AppRouter from 'router/AppRouter';
import React from 'react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';

import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';

SwiperCore.use([Navigation, Autoplay]);

function App() {
	return <AppRouter />;
}

export default App;
