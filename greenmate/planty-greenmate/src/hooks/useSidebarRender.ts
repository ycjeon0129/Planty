import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { NOT_ARROWED_PATH } from 'constants/sidebar/Sidebar';

/**
 * 허용되지 않은 경로에 대해 Sidebar의 표시 유무를 확인하는 커스텀 훅.
 * @returns true (Sidebar 보여짐) / false (Sidebar 숨김)
 */
function useSidebarRender() {
	const [isSidebarRender, setIsSidebarRender] = useState(false);
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

		setIsSidebarRender(!isPathExcluded);
	}, [location]);

	return isSidebarRender;
}

export default useSidebarRender;
