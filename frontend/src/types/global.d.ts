// 캘린더의 선택된 날짜에 대한 타입
export type ValuePiece = Date | null;
export type Value = ValuePiece | [ValuePiece, ValuePiece];

// 차트 관련
export interface IPlantDatasets {
	label: string;
	fill: boolean;
	tension: number;
	data: Array;
	borderColor: string;
	pointRadius: number;
}

export interface IPlantData {
	date: string;
	temperature: number;
	humidity: number;
	soilHumidity: number;
}

export interface IChartData {
	labels: string[];
	datasets: Chart.ChartDataset<'line', number[], string>[];
}
