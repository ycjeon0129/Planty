import App from 'App';
import React from 'react';
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
import PrivateRoute from './PrivateRoute';

function AppRouter() {
	return (
		<div className="container">
			<BrowserRouter>
				<SideBar />
				<Routes>
					{/* 로그인이 필요하지 않은 경로 */}
					<Route path="/" element={<Navigate replace to="/dashboard" />} />
					<Route path="/app" element={<App />} />
					<Route path="/login" element={<LoginPage />} />

					{/* 로그인이 필요한 경로 */}
					<Route path="/" element={<PrivateRoute />}>
						<Route path="/dashboard" element={<DashBoardPage />} />
						<Route path="/consulting" element={<Outlet />}>
							<Route path="" element={<Navigate to="error" />} />
							<Route path="loading" element={<LoadingPage />} />
							<Route path="chatting" element={<ChattingPage />} />
							<Route path="video" element={<VideoPage />} />
						</Route>
						<Route path="/subscribes" element={<SubscribesPage />}>
							<Route path="" element={<Navigate to="list" />} />
							<Route path="list" element={<ListPage />}>
								<Route path=":sid" element={<SubscribesDetailPage />} />
							</Route>
							<Route path="calendar" element={<CalendarPage />} />
						</Route>
						<Route path="/history" element={<HistoryPage />}>
							<Route path="" element={<Navigate to="emergency" />} />
							<Route path="emergency" element={<EmergencyPage />}>
								<Route path=":eid" element={<EmergencyDetail />} />
							</Route>
							<Route path="consulting" element={<ConsultingPage />} />
						</Route>
						<Route path="/settings" element={<SettingPage />} />
					</Route>

					{/* 에러페이지 처리 */}
					<Route path="/*" element={<Navigate replace to="/error" />} />
					<Route path="/error" element={<ErrorPage />} />

					<Route path="/develop" element={<Develop />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default AppRouter;
