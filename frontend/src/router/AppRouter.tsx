import HomePage from 'pages/Home/HomePage';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import 'styles/index.scss';
import Develop from 'pages/Develop';
import LoadingPage from 'pages/Etc/LoadingPage';
import PrivateRoute from './PrivateRoute';

function AppRouter() {
	const [isloading, setIsLoading] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(true);
		}, 2000);
	});

	return (
		<div className="container">
			{isloading ? (
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Navigate replace to="/home" />} />
						<Route
							path="/home"
							element={
								<PrivateRoute>
									<HomePage />
								</PrivateRoute>
							}
						/>
						{/* 컴포넌트 개발용 */}
						<Route path="/develop" element={<Develop />} />
					</Routes>
				</BrowserRouter>
			) : (
				<LoadingPage />
			)}
		</div>
	);
}

export default AppRouter;
