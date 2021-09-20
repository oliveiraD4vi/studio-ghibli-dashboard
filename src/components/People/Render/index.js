import { useState, useEffect } from 'react';

import PeopleCard from '../Card';
import axios from 'axios';

import './style.scss';

export default function PeopleRender() {
	const [items, setItems] = useState([]);

	useEffect(() => {
		async function fetchData () {
			const { data } = await axios.get('https://ghibliapi.herokuapp.com/people/');

			setItems(data);
		};
		
		fetchData();
	});

	return (
		<>
			<div className="people-card-render">
				{
					items.map((item) => (
						<PeopleCard name={item.name} />
					))
				}
			</div>
		</>
	);
}