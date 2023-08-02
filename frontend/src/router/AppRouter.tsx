import HomePage from 'pages/Home/HomePage';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import LoadingPage from 'pages/Etc/LoadingPage';
import LoginPage from 'pages/User/LoginPage';
import Develop from 'pages/Develop';
import ShopPage from 'pages/Shop/ShopPage';
import EmergencyPage from 'pages/Emergency/EmergencyPage';
import MypagePage from 'pages/Mypage/MypagePage';
import SubscribeListPage from 'pages/subscribe/SubscribeList/SubscribeListPage';
import SubscribeDetailPage from 'pages/subscribe/SubscribeDetail/SubscribeDetailPage';
import SubscribePage from 'pages/subscribe/Subscribe/SubscribePage';
import TabBarLayout from 'components/layout/common/TabBarLayout/TabBarLayout';
import TabBarList from 'components/organisms/common/TabBarList/TabBarList';
import PrivateRoute from './PrivateRoute';
import 'styles/index.scss';

function AppRouter() {
	const [isLoading, setIsLoading] = useState(true);

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
					<Route path="/" element={<PrivateRoute />}>
						<Route path="/home" element={<HomePage />} />
						<Route path="/shop" element={<ShopPage />} />
						<Route path="/emergency" element={<EmergencyPage />} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="/mypage" element={<MypagePage />} />
						<Route path="/subscribe" element={<SubscribePage />}>
							<Route index element={<SubscribeListPage />} />
							<Route path=":sid" element={<SubscribeDetailPage />} />
						</Route>
					</Route>

					{/* 컴포넌트 개발용 */}
					<Route path="/develop" element={<Develop />} />
				</Routes>

				<TabBarLayout>
					<TabBarList />
				</TabBarLayout>
			</BrowserRouter>
		</div>
	);
}

export default AppRouter;
