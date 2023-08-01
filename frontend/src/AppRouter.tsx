import HomePage from 'pages/Home/HomePage';
import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './styles/index.scss';
import Develop from 'pages/Develop';

function AppRouter() {
	return (
		<BrowserRouter>
			<div className="container">
				<Routes>
					<Route path="/" element={<Navigate replace to="/home" />} />
					<Route path="/home" element={<HomePage />} />
					{/* 컴포넌트 개발용 */}
					<Route path="/develop" element={<Develop />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default AppRouter;
