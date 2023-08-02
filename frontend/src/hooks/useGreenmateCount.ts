import { useEffect, useState } from 'react';
import getGreenmateCountApi from 'utils/api/greenmate';

const useGreenmateCount = (): number => {
	const [greenmateCount, setGreenmateCount] = useState(0);

	/**
	 * 서버로부터 그린메이트의 접속 정보를 받아와 greenmateCount에 저장.
	 */
	const fetchData = async () => {
		try {
			const response = await getGreenmateCountApi();
			setGreenmateCount(response.data.count);
		} catch (error) {
			console.error('에러', error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return greenmateCount;
};

export default useGreenmateCount;
