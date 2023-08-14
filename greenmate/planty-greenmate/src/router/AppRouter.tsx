import App from 'App';
import React, { useEffect } from 'react';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import SideBar from 'components/organisms/common/SideBar/SideBar';
import Develop from 'pages/Develop';
import 'styles/index.scss';
import ErrorPage from 'pages/Etc/ErrorPage';
import DashBoardPage from 'pages/DashBoard/DashBoardPage';
import LoadingPage from 'pages/Consulting/LoadingPage';
import ChattingPage from 'pages/Consulting/ChattingPage';
import VideoPage from 'pages/Consulting/VideoPage';
import ListPage from 'pages/Subscribes/ListPage';
import SubscribesPage from 'pages/Subscribes/SubscribesPage';
import CalendarPage from 'pages/Subscribes/CalendarPage';
import EmergencyPage from 'pages/History/EmergencyPage';
import ConsultingPage from 'pages/History/ConsultingPage';
import HistoryPage from 'pages/History/HistoryPage';
import SettingPage from 'pages/Setting/SettingPage';
import LoginPage from 'pages/login/LoginPage';
import SubscribesDetailPage from 'pages/Subscribes/SubscribesDetailPage';
import EmergencyDetail from 'components/organisms/history/EmergencyDetail/EmergencyDetail';
import ConsultingList from 'components/organisms/history/ConsultingList/ConsultingList';
import ScrollToTop from 'components/atoms/common/ScrollToTop/ScrollToTop';
import { Toaster } from 'react-hot-toast';
import { useRecoilState } from 'recoil';
import { authState } from 'recoil/auth';
import LocalStorage from 'constants/storage/LocalStorage';
import PrivateRoute from './PrivateRoute';

function AppRouter() {
	const [auth, setAuth] = useRecoilState(authState);

	useEffect(() => {
		const loginUser = LocalStorage.getItem('loginUser');

		if (loginUser) {
			setAuth(JSON.parse(loginUser));
		}
	}, [setAuth]);

	return (
		<div className="container">
			<BrowserRouter>
				<SideBar />
				<Routes>
					{/* 로그인이 필요하지 않은 경로 */}
					<Route path="/" element={<Navigate replace to="/admin" />} />
					<Route path="/admin" element={<Navigate replace to={auth ? '/admin/dashboard' : '/admin/login'} />} />
					<Route path="/admin/app" element={<App />} />
					<Route path="/admin/login" element={<LoginPage />} />

					{/* 로그인이 필요한 경로 */}
					<Route path="/admin" element={<PrivateRoute />}>
						<Route path="/admin/dashboard" element={<DashBoardPage />} />
						<Route path="/admin/consulting" element={<Outlet />}>
							<Route path="" element={<Navigate to="error" />} />
							<Route path="loading" element={<LoadingPage />} />
							<Route path="chatting" element={<ChattingPage />} />
							<Route path="video" element={<VideoPage />} />
						</Route>
						<Route path="/admin/subscribes" element={<SubscribesPage />}>
							<Route path="" element={<Navigate to="list" />} />
							<Route path="list" element={<ListPage />}>
								<Route path=":sid" element={<SubscribesDetailPage />} />
							</Route>
							<Route path="calendar" element={<CalendarPage />} />
						</Route>
						<Route path="/admin/history" element={<HistoryPage />}>
							<Route path="" element={<Navigate to="emergency" />} />
							<Route path="emergency" element={<EmergencyPage />}>
								<Route path=":eid" element={<EmergencyDetail />} />
							</Route>
							<Route path="consulting" element={<ConsultingPage />}>
								<Route path=":cid" element={<ConsultingList />} />
							</Route>
						</Route>
						<Route path="/admin/settings" element={<SettingPage />} />
					</Route>

					{/* 에러페이지 처리 */}
					<Route path="/admin/*" element={<Navigate replace to="/admin/error" />} />
					<Route path="/admin/error" element={<ErrorPage />} />

					<Route path="/admin/develop" element={<Develop />} />
				</Routes>
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
			</BrowserRouter>
		</div>
	);
}

export default AppRouter;
