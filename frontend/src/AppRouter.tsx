import Navigation from 'components/layout/Navigation';
import HomePage from 'pages/Home/HomePage';
import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './styles/index.scss';
import PageLayout from './components/layout/PageLayout';

function AppRouter() {
	return (
		<BrowserRouter>
			<PageLayout>
				<Navigation />
				<Routes>
					<Route path="/" element={<Navigate replace to="/home" />} />
					<Route path="/home" element={<HomePage />} />
				</Routes>
			</PageLayout>
		</BrowserRouter>
	);
}

export default AppRouter;
