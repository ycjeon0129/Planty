import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute() {
	// const auth = useAuth();
	const auth = { name: '전인혁' };
	return auth ? <Outlet /> : <Navigate to="/login" />;
}
export default PrivateRoute;
