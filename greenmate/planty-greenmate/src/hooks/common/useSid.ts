import { useLocation } from 'react-router-dom';

const useLocationIdx = (slashCnt: number) => {
	return +useLocation().pathname.split('/')[slashCnt];
};

export default useLocationIdx;
