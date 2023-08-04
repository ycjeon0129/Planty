import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { NOT_ARROWED_PATH } from 'constants/tabbar/TabBar';

/**
 * 허용되지 않은 경로에 대해 Tabbar의 표시 유무를 확인하는 커스텀 훅.
 * @returns true (Tabbar 보여짐) / false (Tabbar 숨김)
 */
function useTabbarRender() {
	const [isTabbarRender, setIsTabbarRender] = useState(false);
	const location = useLocation();

	useEffect(() => {
		const isPathExcluded = NOT_ARROWED_PATH.some((path) => {
			if (typeof path === 'string') {
				return path === location.pathname;
			}
			if (path instanceof RegExp) {
				return path.test(location.pathname);
			}
			return false;
		});

		setIsTabbarRender(!isPathExcluded);
	}, [location]);

	return isTabbarRender;
}

export default useTabbarRender;
