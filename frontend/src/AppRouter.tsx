import HomePage from 'pages/Home/HomePage';
import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './styles/index.scss';
import NavigationLayout from 'components/layout/NavigationLayout/NavigationLayout';
import Navigation from 'components/organisms/common/Navigation/Navigation';
import Develop from 'pages/Develop';
import PageLayout from './components/layout/PageLayout/PageLayout';

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
					{/* 컴포넌트 개발용 */}
					<Route path="/develop" element={<Develop />} />
				</Routes>
			</PageLayout>
		</BrowserRouter>
	);
}

export default AppRouter;
