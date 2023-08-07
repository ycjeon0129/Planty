import App from 'App';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import SideBar from 'components/organisms/common/SideBar/SideBar';
import Develop from 'pages/Develop';
import 'styles/index.scss';
import ErrorPage from 'pages/etc/ErrorPage';
import DashBoardPage from 'pages/DashBoard/DashBoardPage';
import PrivateRoute from './PrivateRoute';

function AppRouter() {
	return (
		<div className="container">
			<BrowserRouter>
				<SideBar />

				<Routes>
					{/* 로그인이 필요하지 않은 경로 */}
					<Route path="/" element={<Navigate replace to="/home" />} />
					<Route path="/login" element={<App />} />

					{/* 로그인이 필요한 경로 */}
					<Route path="/" element={<PrivateRoute />}>
						<Route path="/dashboard" element={<DashBoardPage />} />
						<Route path="/consulting" element={<div />}>
							<Route path="video" element={<div />} />
							<Route path="chatting" element={<div />} />
						</Route>
						<Route path="/subscribes" element={<div />}>
							<Route path="list" element={<div />} />
							<Route path="calendar" element={<div />} />
						</Route>
						<Route path="/history" element={<div />}>
							<Route path="emergency" element={<div />} />
							<Route path="consulting" element={<div />} />
						</Route>
						<Route path="/consulting" element={<div />} />
						<Route path="/setting" element={<div />} />
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
