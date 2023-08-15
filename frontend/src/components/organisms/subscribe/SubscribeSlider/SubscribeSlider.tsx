import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './SubscribeSlider.scss';
import { ISubscribe, ISubscribeResponse } from 'types/domain/subscribe';
import { findDoneSubscribeApi } from 'utils/api/subscribe';
import responseToSubscribe from 'utils/subscribes/responseToSubscribe';
import SubscribeListItem from '../SubscribeListItem/SubscribeListItem';

/**
 * 구독 목록 슬라이더
 */
function SubscribeSlider() {
	const [subscribes, setSubscribes] = useState<ISubscribe[] | null>(null);

	const findSubscribes = async () => {
		try {
			const response = await findDoneSubscribeApi(1);
			const newSubcribes: ISubscribe[] = response.data.map((el: ISubscribeResponse) => responseToSubscribe(el));
			setSubscribes(newSubcribes);
		} catch (error) {
			console.error('에러', error);
		}
	};

	useEffect(() => {
		if (subscribes === null) {
			findSubscribes();
		}
	});

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
