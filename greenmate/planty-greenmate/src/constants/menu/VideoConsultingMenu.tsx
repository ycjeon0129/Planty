import React, { ReactNode } from 'react';
import { ReactComponent as VideoOn } from 'assets/icons/consultingMenu/VideoOn.svg';
import { ReactComponent as VideoOff } from 'assets/icons/consultingMenu/VideoOff.svg';
import { ReactComponent as MicOn } from 'assets/icons/consultingMenu/MicOn.svg';
import { ReactComponent as MicOff } from 'assets/icons/consultingMenu/MicOff.svg';
import { ReactComponent as ChatOn } from 'assets/icons/consultingMenu/ChatOn.svg';
import { ReactComponent as ChatOff } from 'assets/icons/consultingMenu/ChatOff.svg';
import { ReactComponent as Chart } from 'assets/icons/consultingMenu/Chart.svg';
import { ReactComponent as Exit } from 'assets/icons/consultingMenu/Power.svg';

type MenuType = {
	key: string;
	onIcon: ReactNode;
	offIcon: ReactNode;
	visible: boolean;
	isDanger: boolean;
};

type IVideoConsultingMenu = MenuType[];

export const MENU: IVideoConsultingMenu = [
	{
		key: 'cam',
		onIcon: <VideoOn />,
		offIcon: <VideoOff />,
		visible: true,
		isDanger: false,
	},
	{
		key: 'mic',
		onIcon: <MicOn />,
		offIcon: <MicOff />,
		visible: true,
		isDanger: false,
	},
	{
		key: 'chat',
		onIcon: <ChatOn />,
		offIcon: <ChatOff />,
		visible: true,
		isDanger: false,
	},
	{
		key: 'chart',
		onIcon: <Chart />,
		offIcon: <Chart />,
		visible: false,
		isDanger: false,
	},
	{
		key: 'exit',
		onIcon: <Exit />,
		offIcon: <Exit />,
		visible: true,
		isDanger: true,
	},
];

export default MENU;
