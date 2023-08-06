import { dummyChartDatasets } from 'dummy';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { IChartData, IPlantData, IPlantDatasets } from 'types/global';
import { findChartDatasetApi } from 'utils/api/subscribe';

/**
 * #####수정 필요#####
 * 온/습도 검색 조건에 해당하는 차트 데이터셋을 불러와 리턴하는 커스텀 훅
 * @param temp 온도 버튼 true/false
 * @param hudi 습도 버튼 true/false
 * @returns 온도/습도 차트 데이터 (IChartData)
 */
const useChartData = (temp: boolean, hudi: boolean): IChartData => {
	const [chartData, setChartData] = useState<IChartData | null>(null); // 차트 전체 data
	const [datasets, setDatasets] = useState<IPlantDatasets[]>([]); // 차트의 막대 하나하나를 나타내는 datasets
	const [plantData, setPlantData] = useState<IPlantData[] | null>(null);
	const sid = +useLocation().pathname.split('/')[2];

	/**
	 * 서버로부터 온/습도 데이터셋을 받아와 datasets에 저장.
	 */
	const fetchData = async () => {
		try {
			const response = await findChartDatasetApi(sid);
			const responsePlantData = response.data.datasets;
			setPlantData(responsePlantData);

			if (temp && datasets) {
				const tempDatasets = {
					label: '온도',
					fill: false,
					tension: 0.1,
					data: responsePlantData.map((d: IPlantData) => d.temperature),
					borderColor: '#ff4343',
					pointRadius: 8,
				};
				setDatasets([...datasets, tempDatasets]);
				console.log('온도', temp);
			}

			if (hudi && datasets) {
				const hudiDatasets = {
					label: '습도',
					fill: false,
					tension: 0.1,
					data: responsePlantData.map((d: IPlantData) => d.humidity),
					borderColor: '#00c2ff',
					pointRadius: 8,
				};
				setDatasets([...datasets, hudiDatasets]);
				console.log('습도', temp);
			}
		} catch (error) {
			console.error('에러', error);
		}
	};

	useEffect(() => {
		fetchData();
	});

	useEffect(() => {
		if (datasets && plantData) {
			const data = {
				labels: plantData.map((d) => d.date),
				datasets,
			};
			setChartData(data);
		}
	}, [datasets, plantData]);

	console.log(chartData);
	// return chartData;
	return dummyChartDatasets;
};

export default useChartData;
