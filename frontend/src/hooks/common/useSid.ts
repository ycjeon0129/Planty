import { useLocation } from 'react-router-dom';

const useSid = (): number => {
	const location = useLocation();
	return +location.pathname.split('/')[2];
};
export default useSid;
