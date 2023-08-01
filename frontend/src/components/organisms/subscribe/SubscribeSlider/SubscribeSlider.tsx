import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import dummySubscribe from 'dummy';
import SubscribeListItem from '../SubscribeListItem/SubscribeListItem';

// 구독 목록 슬라이더
function SubscribeSlider() {
	return (
		<Swiper>
			{dummySubscribe.map((subscribe) => (
				<SwiperSlide key={subscribe.sid}>
					<SubscribeListItem subscribe={subscribe} />
				</SwiperSlide>
			))}
		</Swiper>
	);
}

export default SubscribeSlider;
