/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import SideBar from 'components/organisms/common/SideBar/SideBar';
import Develop from 'pages/Develop';
import 'styles/index.scss';
import ErrorPage from 'pages/Etc/ErrorPage';
import DashBoardPage from 'pages/DashBoard/DashBoardPage';
import LoadingPage from 'pages/Consulting/LoadingPage';
import ChattingPage from 'pages/Consulting/ChattingPage';
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
import { authState, consultingSessionState, modalControlState } from 'recoil/store';
import LocalStorage from 'constants/storage/LocalStorage';
import VideoSessionPage from 'pages/Consulting/VideoSessionModalPage';
import ConsultingCompletePage from 'pages/Consulting/ConsultingCompletePage';
import PrivateRoute from './PrivateRoute';

function AppRouter() {
	const [consultingSession] = useRecoilState(consultingSessionState);
	const [, setModalControl] = useRecoilState(modalControlState);
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const control = {
		open,
		handleOpen,
		handleClose,
	};

	const [auth, setAuth] = useRecoilState(authState);

	useEffect(() => {
		const loginUser = LocalStorage.getItem('loginUser');

		if (loginUser) {
			setAuth(JSON.parse(loginUser));
		}
	}, [setAuth]);

	useEffect(() => {
		console.log('현재 consultingSession', consultingSession);
		setModalControl(control);
	}, [consultingSession]);

	return (
		<div className="container">
			<BrowserRouter basename="/admin">
				<VideoSessionPage open={open} handleClose={handleClose} />
				<SideBar />
				<Routes>
					{/* 로그인이 필요하지 않은 경로 */}
					<Route path="/" element={<Navigate replace to={auth ? '/dashboard' : '/login'} />} />
					<Route path="/login" element={<LoginPage />} />

					{/* 로그인이 필요한 경로 */}
					<Route path="/" element={<PrivateRoute />}>
						<Route path="/dashboard" element={<DashBoardPage />} />
						<Route path="/consulting" element={<Outlet />}>
							<Route path="" element={<Navigate to="error" />} />
							<Route path="loading" element={<LoadingPage />} />
							<Route path="chatting" element={<ChattingPage />} />
							<Route path="complete" element={<ConsultingCompletePage />} />
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
							<Route path="consulting" element={<ConsultingPage />}>
								<Route path=":cid" element={<ConsultingList />} />
							</Route>
						</Route>
						<Route path="/settings" element={<SettingPage />} />
					</Route>

					{/* 에러페이지 처리 */}
					<Route path="/*" element={<Navigate replace to="error" />} />
					<Route path="/error" element={<ErrorPage />} />

					<Route path="/develop" element={<Develop />} />
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
