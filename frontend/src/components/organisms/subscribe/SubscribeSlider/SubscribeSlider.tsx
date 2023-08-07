import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import dummySubscribe from 'dummy';
import SubscribeListItem from '../SubscribeListItem/SubscribeListItem';
import './SubscribeSlider.scss';

/**
 * 구독 목록 슬라이더
 */
function SubscribeSlider() {
	return (
		<div className="slider-container">
			<Swiper spaceBetween={10} slidesPerView="auto" className="subscribe-slider">
				{dummySubscribe.map((subscribe) => (
					<SwiperSlide key={subscribe.sid}>
						<SubscribeListItem subscribe={subscribe} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

export default SubscribeSlider;
