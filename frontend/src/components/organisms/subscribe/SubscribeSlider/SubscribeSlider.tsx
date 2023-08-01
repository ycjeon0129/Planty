import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import SubscribeListItem from '../SubscribeListItem/SubscribeListItem';

// 구독 목록 슬라이더
function SubscribeSlider() {
	// useSubscribe
	SwiperCore.use([Navigation]);

	return (
		<Swiper>
			<SwiperSlide>
				<SubscribeListItem />
			</SwiperSlide>
			<SwiperSlide>
				<SubscribeListItem />
			</SwiperSlide>
			<SwiperSlide>
				<SubscribeListItem />
			</SwiperSlide>
		</Swiper>
	);
}

export default SubscribeSlider;
