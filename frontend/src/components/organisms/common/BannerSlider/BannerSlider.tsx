import { dummybanner } from 'dummy';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './BannerSlider.scss';

function BannerSlider() {
	return (
		<Swiper className="banner-slider-container" autoplay={{ delay: 2000, disableOnInteraction: false }}>
			{dummybanner.map((banner) => (
				<SwiperSlide key={banner.id}>
					<img src={banner.src} alt="" />
				</SwiperSlide>
			))}
		</Swiper>
	);
}

export default BannerSlider;
