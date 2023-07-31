import HomePage from 'pages/Home/HomePage';
import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './styles/index.scss';
import NavigationLayout from 'components/layout/NavigationLayout';
import Navigation from 'components/ui/Navigation';
import PageLayout from './components/layout/PageLayout';

function AppRouter() {
	return (
		<BrowserRouter>
			<PageLayout>
				<NavigationLayout>
					<Navigation />
				</NavigationLayout>
				<Routes>
					<Route path="/" element={<Navigate replace to="/home" />} />
					<Route path="/home" element={<HomePage />} />
				</Routes>
			</PageLayout>
		</BrowserRouter>
	);
}

export default AppRouter;
