import HomePage from 'pages/Home/HomePage';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import LoadingPage from 'pages/Etc/LoadingPage';
import LoginPage from 'pages/User/LoginPage';
import Develop from 'pages/Develop';
import ShopPage from 'pages/Shop/ShopPage';
import PrivateRoute from './PrivateRoute';
import 'styles/index.scss';

function AppRouter() {
	const [isloading, setIsLoading] = useState(false);

	const loading = () => {
		setTimeout(() => {
			setIsLoading(true);
		}, 2000);
	};
	useEffect(() => {
		loading();
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
						<Route path="/shop" element={<ShopPage />} />
						<Route path="/login" element={<LoginPage />} />

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
