/* eslint-disable react-hooks/exhaustive-deps */
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
import VideoConsultingPage from 'pages/Consulting/VideoConsulting/VideoConsultingPage';
import ShopPay from 'pages/Shop/ShopPay';
import ConsultingLoadingPageLayout from 'components/layout/Page/ConsultingLoadingPageLayout/ConsultingLoadingPageLayout';
import EmergencyParticipatePage from 'pages/Emergency/EmergencyParticipatePage';
import ConsultingParticipatePage from 'pages/Consulting/ConsultingParticipatePage';
import Success from 'pages/Payment/pages/Success';
import CheckoutPage from 'pages/Payment/pages/Checkout';
import { Toaster } from 'react-hot-toast';
import { SimpleDialogContainer } from 'react-simple-dialogs';
import 'styles/index.scss';
import { useRecoilState } from 'recoil';
import userState from 'recoil/user';
import { findUserApi } from 'utils/api/auth';
import FailPage from 'pages/Payment/pages/Fail';
import PrivateRoute from './PrivateRoute';

function AppRouter() {
	// TODO : (로딩) 배포 후 true로 변경
	const [isLoading, setIsLoading] = useState(true);
	const [user, setUser] = useRecoilState(userState);

	const loading = () => {
		setTimeout(() => {
			setIsLoading(false);
		}, 2000);
	};

	// 앱 렌더링 시, AT사용하여 유저정보 불러오기
	const fetchUserData = async () => {
		const response = await findUserApi();

		if (response === null) return;
		if (response.status === 200) {
			setUser(response.data);
		}
	};

	useEffect(() => {
		loading();
		fetchUserData();
	}, []);

	if (isLoading) {
		return <LoadingPage />;
	}

	return (
		<div className="container">
			<BrowserRouter>
				<Routes>
					{/* 로그인 상태라면 home으로, 로그인이 안된 상태라면 login으로 */}
					<Route path="/" element={<Navigate replace to={user ? '/home' : '/login'} />} />

					<Route path="/login" element={<LoginPage />} />
					<Route path="/" element={<PrivateRoute />}>
						<Route path="/home" element={<HomePage />} />
						<Route path="/shop" element={<ShopPage />} />
						<Route path="/shop/detail/:spid" element={<ShopDetail />} />
						<Route path="/shop/pay/:spid" element={<ShopPay />} />
						<Route path="/emergency" element={<EmergencyPage />} />
						<Route path="/emergency/participate" element={<EmergencyParticipatePage />} />
						<Route path="/consulting/participate" element={<ConsultingParticipatePage />} />
						<Route path="/mypage" element={<MypagePage />} />
						<Route path="/mypage/booking" element={<BookingManagementPage />} />
						<Route path="/mypage/:menu" element={<MypageSubMenuDetailPage />} />
						<Route path="/subscribe" element={<SubscribePage />} />
						<Route path="/subscribe/:sid" element={<SubscribeDetailPage />} />
						<Route path="/subscribe/:sid/booking" element={<BookingPage />} />
						<Route path="/subscribe/:sid/consulting" element={<ConsultingHistoryPage />} />
						<Route path="/consulting/video" element={<VideoConsultingPage />} />
						<Route path="/consultingloading" element={<ConsultingLoadingPageLayout />} />
						<Route path="/payment/:pid" element={<CheckoutPage />} />
						<Route path="/payment/success/:spid" element={<Success />} />
						<Route path="/payment/fail" element={<FailPage />} />
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
				<Toaster
					containerStyle={{
						top: 10,
						fontSize: 14,
					}}
					toastOptions={{
						duration: 1500,
					}}
				/>
				<SimpleDialogContainer />
			</BrowserRouter>
		</div>
	);
}

export default AppRouter;
