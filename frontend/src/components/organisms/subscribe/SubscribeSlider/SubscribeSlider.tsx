import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './SubscribeSlider.scss';
import { ISubscribe } from 'types/subscribe';
import useAllSubscribe from 'hooks/subscribes/useAllSubscribe';
import SubscribeListItem from '../SubscribeListItem/SubscribeListItem';

/**
 * 구독 목록 슬라이더
 */
function SubscribeSlider() {
	const subscribes: ISubscribe[] = useAllSubscribe() as ISubscribe[];

	return (
		<div className="slider-container">
			<Swiper spaceBetween={10} slidesPerView="auto" className="subscribe-slider">
				{subscribes ? (
					subscribes?.map((subscribe) => (
						<SwiperSlide key={subscribe.sid}>
							<SubscribeListItem subscribe={subscribe} />
						</SwiperSlide>
					))
				) : (
					<div />
				)}
			</Swiper>
		</div>
	);
}

export default SubscribeSlider;
