import React, { useEffect, useState } from 'react';
import { Chart } from 'react-chartjs-2';
import './PlantChart.scss';

import ChartButton from 'components/atoms/common/ChartButton/ChartButton';
import useToggle from 'hooks/useToggle';
import { useLocation } from 'react-router-dom';
import { findPlantDataApi } from 'utils/api/subscribe';
import { IChartData, IPlantData } from 'types/global';
import makeChartData from 'utils/makeChartData';
import { dummyPlantData } from 'dummy';

function PlantChart() {
	// 온/습도 토글 버튼 상태변수
	const [tempState, tempToggle] = useToggle(true);
	const [hudiState, hudiToggle] = useToggle(true);
	const [plantDatas, setPlantDatas] = useState<IPlantData[]>([]);
	// 차트 관련 데이터 변수
	const [chartData, setChartData] = useState<IChartData>({ labels: [], datasets: [] });

	// 현재 구독의 id
	const sid = parseInt(useLocation().pathname.split('/')[2], 10);

	/**
	 * 서버로부터 데이터를 fetch 해옴.
	 */
	const fetchData = async () => {
		try {
			const response = await findPlantDataApi(sid);
			setPlantDatas(response.data.plantDatas);
		} catch (error) {
			console.error('에러', error);
		}
	};

	// 마운트/언마운트 시 데이터 fetch
	useEffect(() => {
		fetchData();
	});

	useEffect(() => {
		// 온/습도 버튼의 상태가 변할 때마다 차트를 업데이트
		// setChartData(makeChartData(plantDatas, tempState, hudiState));
		setChartData(makeChartData(dummyPlantData, tempState, hudiState));
	}, [plantDatas, tempState, hudiState]);

	return (
		<div className="plant-chart-container">
			<div className="chart-buttons">
				<ChartButton type="danger" isActive={tempState} message="온도" onClick={tempToggle} />
				<ChartButton type="success" isActive={hudiState} message="습도" onClick={hudiToggle} />
			</div>
			<Chart type="line" data={chartData} />
		</div>
	);
}

export default PlantChart;
