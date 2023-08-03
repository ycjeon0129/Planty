import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import dummySubscribe from 'dummy';
import SubscribeListItem from 'components/organisms/subscribe/SubscribeListItem/SubscribeListItem';
// import './SubscribeSlider.scss';

/**
 * 구독 목록 슬라이더
 */
function ProductImg() {
	return (
		<Swiper spaceBetween={10} slidesPerView="auto" className="subscribe-slider">
			{dummySubscribe.map((subscribe) => (
				<SwiperSlide key={subscribe.sid}>
					<SubscribeListItem subscribe={subscribe} />
				</SwiperSlide>
			))}
		</Swiper>
	);
}

export default ProductImg;
