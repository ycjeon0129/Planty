import React from 'react';
import { ISubscribe } from 'types/domain/subscribe';
import SubscribeListItem from '../SubscribeListItem/SubscribeListItem';
import './SubscribeList.scss';

function SubscribeList({ subscribes }: { subscribes: ISubscribe[] }) {
	return <ul className="subscribe-list-container">{subscribes?.map((v) => <SubscribeListItem subscribe={v} />)}</ul>;
}

export default SubscribeList;
