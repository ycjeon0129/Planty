import { IChartData, IPlantDataset } from 'types/base/global';
import { IEmbeddedInfo } from 'types/subscribe';

/**
 * 식물의 온/습도 정보 배열(plantDatas)과 temp hudi 에 따라 최종 차트 데이터를 만들어주는 util 함수
 * @param plantDatas 식물 온/습도 정보 배열 IPlantData[]
 * @param temp 온도 버튼 true/false
 * @param hudi 습도 버튼 true/false
 * @returns 온도/습도 차트 데이터 (IChartData)
 */
const makeChartData = (plantDatas: IEmbeddedInfo[], temp: boolean, hudi: boolean, soil: boolean): IChartData => {
	const charData: IChartData = {
		labels: plantDatas?.map((d) => d.date),
		datasets: [],
	};

	const tempDataset: IPlantDataset = {
		label: '온도',
		fill: false,
		tension: 0.1,
		data: plantDatas?.map((d) => d.temp),
		borderColor: '#ff4343',
		pointRadius: 8,
	};

	const hudiDataset: IPlantDataset = {
		label: '습도',
		fill: false,
		tension: 0.1,
		data: plantDatas?.map((d) => d.humidity),
		borderColor: '#00c2ff',
		pointRadius: 8,
	};

	const soilDataset: IPlantDataset = {
		label: '토양 습도',
		fill: false,
		tension: 0.1,
		data: plantDatas?.map((d) => d.soil),
		borderColor: '#FFC75A',
		pointRadius: 8,
	};

	if (temp) {
		charData.datasets.push(tempDataset);
	}

	if (hudi) {
		charData.datasets.push(hudiDataset);
	}

	if (soil) {
		charData.datasets.push(soilDataset);
	}
	return charData;
};

export default makeChartData;
