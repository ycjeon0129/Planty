import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import TabBarLayout from 'components/layout/common/TabBarLayout/TabBarLayout';
import TabBar from 'components/organisms/common/TabBar/TabBar';
import LoginPage from 'pages/User/LoginPage';
import HomePage from 'pages/Home/HomePage';
import ShopPage from 'pages/Shop/ShopPage';
import ShopDetail from 'pages/Shop/ShopDetail';
import EmergencyPage from 'pages/Emergency/EmergencyPage';
import MypagePage from 'pages/Mypage/MypagePage';
import SubscribePage from 'pages/subscribe/Subscribe/SubscribePage';
import SubscribeDetailPage from 'pages/subscribe/SubscribeDetail/SubscribeDetailPage';
import BookingPage from 'pages/BookingPage/BookingPage';
import LoadingPage from 'pages/Etc/LoadingPage';
import ErrorPage from 'pages/Etc/ErrorPage';
import Develop from 'pages/Develop';
import MypageSubMenuDetailPage from 'pages/Mypage/MypageSubMenuDetailPage';
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
						<Route path="/emergency" element={<EmergencyPage />} />
						<Route path="/mypage" element={<MypagePage />} />
						<Route path="/mypage/booking" element={<BookingPage />} />
						<Route path="/mypage/:menu" element={<MypageSubMenuDetailPage />} />
						<Route path="/subscribe" element={<SubscribePage />} />
						<Route path="/subscribe/:sid" element={<SubscribeDetailPage />} />
						<Route path="/subscribe/:sid/booking" element={<div />} />
					</Route>

					{/* 컴포넌트 개발용 */}
					<Route path="/error" element={<ErrorPage />} />
					<Route path="/develop" element={<Develop />} />
				</Routes>

				<TabBarLayout>
					<TabBar />
				</TabBarLayout>
			</BrowserRouter>
		</div>
	);
}

export default AppRouter;
