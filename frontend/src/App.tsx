/* eslint-disable no-tabs */
import AppRouter from 'AppRouter';
import React from 'react';
import SwiperCore, { Navigation } from 'swiper';

import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';

SwiperCore.use([Navigation]);

function App() {
	return <AppRouter />;
}

export default App;
