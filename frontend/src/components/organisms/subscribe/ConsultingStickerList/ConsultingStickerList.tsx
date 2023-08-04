import React from 'react';
import './ConsultingStickerList.scss';
import { ReactComponent as ConsultingIcon } from 'assets/icons/LeafFill.svg';

const PRIMARY_COLOR = '#03C75A';
const DANGER_COLOR = '#FF4343';
const DISABLE_COLOR = '#D3D3D3';

function ConsultingStickerList({ consultingStatus }: { consultingStatus: number[] }) {
	return (
		<ul className="consulting-sticker-list-container">
			{consultingStatus.map((v) => {
				if (v === 0) {
					return (
						<li>
							<ConsultingIcon fill={PRIMARY_COLOR} />
						</li>
					);
				}
				if (v === 1) {
					return (
						<li>
							<ConsultingIcon fill={DANGER_COLOR} />
						</li>
					);
				}
				return (
					<li>
						<ConsultingIcon fill={DISABLE_COLOR} />
					</li>
				);
			})}
		</ul>
	);
}

export default ConsultingStickerList;
