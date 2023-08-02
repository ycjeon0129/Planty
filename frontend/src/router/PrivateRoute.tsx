import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }: { children: ReactNode }) {
	// const auth = useAuth();
	const auth = { name: '전인혁' };
	return auth ? <>{children} </> : <Navigate to="/login" />;
}
export default PrivateRoute;
