import { useNavigate } from 'react-router';

const useMovePage = (): { movePage: (url: string) => void } => {
	const navigate = useNavigate();

	const movePage = (url: string) => {
		navigate(url);
	};

	return {
		movePage,
	};
};

export default useMovePage;
