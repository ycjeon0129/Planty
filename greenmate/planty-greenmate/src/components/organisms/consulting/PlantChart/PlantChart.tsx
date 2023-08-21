import React, { useEffect, useState } from 'react';
import { Chart } from 'react-chartjs-2';
import './PlantChart.scss';

import ChartToggleButton from 'components/atoms/consulting/ChartButton/ChartButton';
import { IChartData } from 'types/base/global';
import useToggle from 'hooks/useToggle';
import { IEmbeddedInfo } from 'types/subscribe';
import makeChartData from 'utils/makeChartData';

function PlantChart({ embeddedInfo }: { embeddedInfo: IEmbeddedInfo[] }) {
	// 온/습도 토글 버튼 상태변수
	const [tempState, tempToggle] = useToggle(true);
	const [hudiState, hudiToggle] = useToggle(true);
	const [soilState, soilToggle] = useToggle(true);
	// 차트 관련 데이터 변수
	const [chartData, setChartData] = useState<IChartData>({ labels: [], datasets: [] });

	useEffect(() => {
		// 온/습도 버튼의 상태가 변할 때마다 차트를 업데이트
		// setChartData(makeChartData(plantDatas, tempState, hudiState));
		setChartData(makeChartData(embeddedInfo, tempState, hudiState, soilState));
	}, [embeddedInfo, tempState, hudiState, soilState]);

	return (
		<div className="plant-chart-container">
			<div className="chart-buttons">
				<ChartToggleButton type="danger" isActive={tempState} message="온도" onClick={tempToggle} />
				<ChartToggleButton type="success" isActive={hudiState} message="습도" onClick={hudiToggle} />
				<ChartToggleButton type="yellow" isActive={soilState} message="토양 습도" onClick={soilToggle} />
			</div>
			<Chart type="line" data={chartData} options={{ plugins: { legend: { display: false } } }} />
		</div>
	);
}

export default PlantChart;
