import { useNavigate } from 'react-router';

const useMovePage = (): { movePage: (url: string) => void; goBack: () => void } => {
	const navigate = useNavigate();

	const movePage = (url: string) => {
		navigate(url);
	};

	const goBack = () => {
		navigate(-1);
	};

	return {
		movePage,
		goBack,
	};
};

export default useMovePage;
