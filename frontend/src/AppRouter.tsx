import Navigation from 'components/layout/Navigation';
import HomePage from 'pages/Home/HomePage';
import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

function AppRouter() {
	return (
		<BrowserRouter>
			<Navigation />
			<Routes>
				<Route path="/" element={<Navigate replace to="/home" />} />
				<Route path="/home" element={<HomePage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default AppRouter;