import HomePageLayout from 'components/layout/Page/HomePageLayout/HomePageLayout';
import AreaTitle from 'components/atoms/common/AreaTitle/AreaTitle';
import SubscribeSlider from 'components/organisms/subscribe/SubscribeSlider/SubscribeSlider';
import React from 'react';
import toast from 'react-hot-toast';
import BannerSlider from 'components/organisms/common/BannerSlider/BannerSlider';
import SquareShortcutButton from 'components/atoms/common/SquareShortcutButton/SquareShortcutButton';
import RectShortcutButton from 'components/atoms/common/RectShortcutButton/RectShortcutButton';
import Header from 'components/organisms/common/Header/Header';
import useMovePage from 'hooks/useMovePage';
import CustomAlert from 'components/organisms/common/CustomAlert/CustomAlert';

function HomePage() {
	const { movePage } = useMovePage();

	const handleConsulting = () => {
		toast.error('현재 예약된 컨설팅이 없습니다.');
		// movePage('/consulting/video', null);
	};

	return (
		<HomePageLayout>
			<Header />
			<BannerSlider />
			<AreaTitle title="내 구독 목록" url="/subscribe" />
			<SubscribeSlider />
			<AreaTitle title="서비스 바로가기" url="#" />
			<SquareShortcutButton
				text="예약 관리"
				handleClick={() => {
					movePage('/mypage/booking', null);
				}}
				type="booking"
			/>
			<RectShortcutButton
				text="채팅 컨설팅"
				handleClick={() => {
					CustomAlert({
						title: '주문 취소',
						desc: '주문을 취소하시겠습니까? 주문 확인 전까지 취소가 가능합니다.',
						btnTitle: '주문 취소하기',
						params: {},
						onAction: () => {
							toast.success('채팅 컨설팅 입니다');
						},
					});
				}}
				type="consulting-chat"
			/>
			<RectShortcutButton text="화상 컨설팅" handleClick={handleConsulting} type="consulting-video" />
		</HomePageLayout>
	);
}

export default HomePage;
