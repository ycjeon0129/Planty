import App from 'App';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import SideBar from 'components/organisms/common/SideBar/SideBar';
import Develop from 'pages/Develop';
import 'styles/index.scss';
import PrivateRoute from './PrivateRoute';

function AppRouter() {
	return (
		<div className="container">
			<BrowserRouter>
				<SideBar />

				<Routes>
					<Route path="/login" element={<App />} />
					<Route path="/" element={<PrivateRoute />}>
						<Route path="/home" element={<App />} />
					</Route>

					<Route path="/*" element={<Navigate replace to="/error" />} />
					<Route path="/error" element={<App />} />

					<Route path="/develop" element={<Develop />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default AppRouter;
