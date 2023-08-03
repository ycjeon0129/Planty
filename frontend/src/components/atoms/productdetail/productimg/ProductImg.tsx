import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

// import required modules
import SwiperCore, { Pagination, Navigation } from 'swiper';

SwiperCore.use([Pagination, Navigation]);

export default function ProductImg({ imgUrls }: { imgUrls: string[] }) {
	return (
		<div className="product-detail-photo">
			<Swiper
				spaceBetween={30}
				pagination={{
					clickable: true,
				}}
				className="mySwiper"
			>
				{imgUrls.map((url) => (
					<SwiperSlide key={url}>
						<img src={url} alt="사진" style={{ height: '300px', width: '100%' }} />
					</SwiperSlide>
				))}
				<br />
				<br />
			</Swiper>
		</div>
	);
}
