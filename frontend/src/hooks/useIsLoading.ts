import { useEffect, useState } from 'react';

const useIsLoading = (params: unknown) => {
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		if (params === null || params === undefined) {
			setIsLoading(true);
		} else {
			setIsLoading(false);
		}
	}, [params]);

	return isLoading;
};

export default useIsLoading;
