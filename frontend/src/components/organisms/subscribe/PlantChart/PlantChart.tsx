import React, { useEffect, useState } from 'react';
import { Chart } from 'react-chartjs-2';
import './PlantChart.scss';

import ChartButton from 'components/atoms/common/ChartButton/ChartButton';
import useToggle from 'hooks/useToggle';
import { IChartData } from 'types/global';
import makeChartData from 'utils/makeChartData';
import { IEmbeddedInfo } from 'types/subscribe';

function PlantChart({ embeddedInfo }: { embeddedInfo: IEmbeddedInfo[] }) {
	// 온/습도 토글 버튼 상태변수
	const [tempState, tempToggle] = useToggle(true);
	const [hudiState, hudiToggle] = useToggle(true);
	// 차트 관련 데이터 변수
	const [chartData, setChartData] = useState<IChartData>({ labels: [], datasets: [] });

	useEffect(() => {
		// 온/습도 버튼의 상태가 변할 때마다 차트를 업데이트
		// setChartData(makeChartData(plantDatas, tempState, hudiState));
		setChartData(makeChartData(embeddedInfo, tempState, hudiState));
	}, [embeddedInfo, tempState, hudiState]);

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
