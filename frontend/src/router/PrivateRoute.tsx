import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import userState from 'recoil/user';

function PrivateRoute() {
	const [user] = useRecoilState(userState);
	return user ? <Outlet /> : <Navigate to="/login" />;
}
export default PrivateRoute;
