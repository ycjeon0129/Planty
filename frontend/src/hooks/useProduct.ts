import { useEffect, useState } from 'react';
import { IProduct } from 'types/domain/product';
import { findAllProductApi, findFilterProductApi } from 'utils/api/product';

const PARAMS: string[] = ['', 'place=1', 'place=2', 'eatable=1', 'eatable=0'];

const useProduct = () => {
	const [products, setProducts] = useState<IProduct[] | null>(null);

	const fetchData = async (param: number) => {
		try {
			if (param === 0) {
				await findAllProductApi().then((res) => {
					if (res.status === 200) {
						setProducts(res.data);
					}
				});
			} else {
				await findFilterProductApi(PARAMS[param]).then((res) => {
					if (res.status === 200) {
						setProducts(res.data);
					}
				});
			}
		} catch (error) {
			console.log('에러', error);
		}
	};

	useEffect(() => {
		fetchData(0);
	}, []);

	return { products, fetchData };
};

export default useProduct;
