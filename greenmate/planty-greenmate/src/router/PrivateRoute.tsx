import LocalStorage from 'constants/storage/LocalStorage';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute() {
	const loginUser = LocalStorage.getItem('loginUser');

	return loginUser ? <Outlet /> : <Navigate to="/admin/login" />;
}
export default PrivateRoute;
