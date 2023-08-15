import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './SubscribeSlider.scss';
import { ISubscribe } from 'types/domain/subscribe';
import useAllSubscribe from 'hooks/api/useAllSubscribe';
import SubscribeListItem from '../SubscribeListItem/SubscribeListItem';

/**
 * 구독 목록 슬라이더
 */
function SubscribeSlider() {
	const subscribes: ISubscribe[] = useAllSubscribe() as ISubscribe[];

	return (
		<div className="slider-container">
			<Swiper spaceBetween={10} slidesPerView="auto" className="subscribe-slider">
				{subscribes &&
					subscribes?.map(
						(subscribe) =>
							subscribe.state !== 'end' && (
								<SwiperSlide key={subscribe.sid}>
									<SubscribeListItem subscribe={subscribe} />
								</SwiperSlide>
							),
					)}
			</Swiper>
		</div>
	);
}

export default SubscribeSlider;
