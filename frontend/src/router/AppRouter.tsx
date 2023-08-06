import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import TabBarLayout from 'components/layout/common/TabBarLayout/TabBarLayout';
import TabBar from 'components/organisms/common/TabBar/TabBar';
import ScrollToTop from 'components/atoms/common/ScrollToTop/ScrollToTop';
import LoginPage from 'pages/User/LoginPage';
import HomePage from 'pages/Home/HomePage';
import ShopPage from 'pages/Shop/ShopPage';
import ShopDetail from 'pages/Shop/ShopDetail';
import EmergencyPage from 'pages/Emergency/EmergencyPage';
import MypagePage from 'pages/Mypage/MypagePage';
import SubscribePage from 'pages/subscribe/Subscribe/SubscribePage';
import SubscribeDetailPage from 'pages/subscribe/SubscribeDetail/SubscribeDetailPage';
import BookingManagementPage from 'pages/Mypage/BookingManagementPage';
import LoadingPage from 'pages/Etc/LoadingPage';
import ErrorPage from 'pages/Etc/ErrorPage';
import Develop from 'pages/Develop';
import MypageSubMenuDetailPage from 'pages/Mypage/MypageSubMenuDetailPage';
import BookingPage from 'pages/subscribe/Booking/BookingPage';
import ConsultingHistoryPage from 'pages/subscribe/ConsultingHistory/ConsultingHistoryPage';
import ShopPay from 'pages/Shop/ShopPay';
import VideoPage from 'pages/Consulting/Video/VideoPage';
import PrivateRoute from './PrivateRoute';
import 'styles/index.scss';

function AppRouter() {
	const [isLoading, setIsLoading] = useState(false);

	const loading = () => {
		setTimeout(() => {
			setIsLoading(false);
		}, 2000);
	};
	useEffect(() => {
		loading();
	});

	if (isLoading) {
		return <LoadingPage />;
	}

	return (
		<div className="container">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Navigate replace to="/home" />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/" element={<PrivateRoute />}>
						<Route path="/home" element={<HomePage />} />
						<Route path="/shop" element={<ShopPage />} />
						<Route path="/shop/detail/:pid" element={<ShopDetail />} />
						<Route path="/shop/pay/" element={<ShopPay />} />
						<Route path="/emergency" element={<EmergencyPage />} />
						<Route path="/mypage" element={<MypagePage />} />
						<Route path="/mypage/booking" element={<BookingManagementPage />} />
						<Route path="/mypage/:menu" element={<MypageSubMenuDetailPage />} />
						<Route path="/subscribe" element={<SubscribePage />} />
						<Route path="/subscribe/:sid" element={<SubscribeDetailPage />} />
						<Route path="/subscribe/:sid/booking" element={<BookingPage />} />
						<Route path="/subscribe/:sid/consulting" element={<ConsultingHistoryPage />} />
						<Route path="/video" element={<VideoPage />} />
					</Route>

					{/* 컴포넌트 개발용 */}
					<Route path="/*" element={<Navigate replace to="/error" />} />
					<Route path="/error" element={<ErrorPage />} />

					<Route path="/develop" element={<Develop />} />
				</Routes>

				<TabBarLayout>
					<TabBar />
				</TabBarLayout>
				<ScrollToTop />
			</BrowserRouter>
		</div>
	);
}

export default AppRouter;
